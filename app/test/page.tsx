"use client";
import { notFound } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import api from "../src/_api/api";
import PhotoById from "../photos/[photoId]/page";

export default function DialogExample() {
  return notFound()
}
// export default function DialogExample() {
//   return notFound()
//   const [isOpen, setIsOpen] = useState(false);
//   const dialogRef = useRef<HTMLDivElement | null>(null); // Explicitly define the type

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const handleClickOutside = (event: MouseEvent) => {
//     if (
//       dialogRef.current &&
//       !dialogRef.current.contains(event.target as Node) // Type assertion
//     ) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="mt-20 border">
//       <button onClick={handleOpen}>Open Dialog</button>

//       {isOpen && (
//         <div ref={dialogRef} className="dialog-overlay bg-red-200">
//           <div className="dialog-content">
//             <h2>Dialog Box</h2>
//             <p>This is the content of the dialog box.</p>
//             <button onClick={handleClose}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
