"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "@/components/ui/Button";

export default function DropBox() {
  const [filesList, setFilesList] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFilesList(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  const clearFiles = () => {
    setFilesList([]);
  }
  return (
    <>
        <div className="mb-7 lg:p-6 p-3 border-2 border-dashed border-gray-600 rounded-lg w-full lg:max-w-md max-w-2xs mx-auto mt-10">
        <div
            {...getRootProps()}
            className={`cursor-pointer p-8 text-center rounded-lg ${
            isDragActive ? "bg-blue-100 border-blue-500" : "bg-gray-50"
            }`}
        >
            <input {...getInputProps()} webkitdirectory="true" />
            {isDragActive ? <p>Drop the folder/files here ...</p> : <p>Drag & drop a folder here, or click to select</p>}
        </div>

        {filesList.length > 0 && (
            <div className="mt-4 text-left">
            <h3 className="font-semibold">Selected Files:</h3>
            <ol className="list-disc ml-5 max-h-64 overflow-y-auto">
                {filesList.map((file, idx) => (
                <li key={idx}>
                    {file.name || file.webkitRelativePath } ({file.size} bytes)
                </li>
                ))}
            </ol>
            </div>
        )}
        </div>
        <div className="flex justify-center items-center-safe mb-7 gap-6">
            <Button placeholder="Reset" size="lg" variant="primary" onClick={clearFiles} />
            <Button placeholder="Submit" size="lg" variant="secondary" />
        </div>
    </>
  );
}
