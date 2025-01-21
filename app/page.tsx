import DropzoneCustom from "@/components/shared/Dropzone";

export default function Home() {
  return (
    <main className="dark:text-white text-black  flex flex-col items-center justify-center
      px-6 md:px-20 gap-6 py-0 ">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1
          className="text-3xl md:text-5xl font-bold text-center
         dark:text-white text-black"
        >
          Free Unlimited File Converter
        </h1>
        <p className="text-muted-foreground text-base text-center md:px-24 xl:px-44 2xl:px-52">
         With Convo, you can effortlessly convert your
          images, audio, and video files to a variety of formats directly on
          your device—no downloads, no uploads, and no hidden fees. All
          processing happens securely on the client side, ensuring your files
          remain private and never leave your browser.
        </p>
      </div>
      <DropzoneCustom/>
    </main>
  );
}
