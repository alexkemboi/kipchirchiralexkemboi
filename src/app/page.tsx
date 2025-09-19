import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-200 p-8">
      {/* Page 1 */}
      <div
        className="w-[210mm] h-[297mm] shadow-lg border bg-white bg-cover bg-center"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
      >
        {/* <div className="p-8 text-black">
          <h1 className="text-3xl font-bold">Page 1</h1>
          <p className="mt-4">This is the first A4 page with bg1.jpg.</p>
        </div> */}
      </div>

      {/* Page 2 */}
      <div
        className="w-[210mm] h-[297mm] shadow-lg border bg-white bg-cover bg-center"
        style={{ backgroundImage: "url('/bg2.jpg')" }}
      >
        {/* <div className="p-8 text-black">
          <h1 className="text-3xl font-bold">Page 2</h1>
          <p className="mt-4">This is the second A4 page with bg2.jpg.</p>
        </div> */}
      </div>
    </div>
  );
}
