import { FFmpeg } from "@ffmpeg/ffmpeg";
import { Action } from "./types";

const getFileExtension = (file_name: string) => {
  const regex = /(?:\.([^.]+))?$/;
  const match = regex.exec(file_name);
  if (match && match[1]) {
    return match[1];
  }
  return "";
};

const removeFileExtension = (file_name: string) => {
  const lastDotIndex = file_name.lastIndexOf(".");
  if (lastDotIndex !== -1) {
    return file_name.slice(0, lastDotIndex);
  }
  return file_name;
};

export const convertFile = async (
  ffmpeg: FFmpeg,
  action: Action
): Promise<any> => {
  try {
    const { file, to, file_name, file_type } = action;

    // Create a buffer from the file
    const fileData = await file.arrayBuffer();
    const inputBuffer = new Uint8Array(fileData);
    
    // Generate input and output names
    const inputFileName = `input.${getFileExtension(file_name)}`;
    const outputFileName = `output.${to}`;

    // Write the input file to FFmpeg's virtual filesystem
    await ffmpeg.writeFile(inputFileName, inputBuffer);

    // Prepare FFmpeg command
    let ffmpeg_cmd: string[] = [];
    
    if (to === "3gp") {
      ffmpeg_cmd = [
        "-i",
        inputFileName,
        "-r",
        "20",
        "-s",
        "352x288",
        "-vb",
        "400k",
        "-acodec",
        "aac",
        "-strict",
        "experimental",
        "-ac",
        "1",
        "-ar",
        "8000",
        "-ab",
        "24k",
        outputFileName
      ];
    } else {
      ffmpeg_cmd = ["-i", inputFileName, outputFileName];
    }

    // Execute the command
    await ffmpeg.exec(ffmpeg_cmd);

    // Read the output file
    const data = await ffmpeg.readFile(outputFileName);
    
    // Clean up files from virtual filesystem
    try {
      await ffmpeg.deleteFile(inputFileName);
      await ffmpeg.deleteFile(outputFileName);
    } catch (err) {
      console.warn("Cleanup error:", err);
    }

    // Create blob and URL
    const blob = new Blob([data], { type: `${file_type.split("/")[0]}/${to}` });
    const url = URL.createObjectURL(blob);

    return { url, output: `${removeFileExtension(file_name)}.${to}` };
  } catch (error:any) {
    console.error("Conversion error:", error);
    throw new Error(`File conversion failed: ${error.message}`);
  }
};