// import BlockSelector from "@/components/BlockSelector";
// import { sourceBlockViews } from "@/nodes";
// import modalBlockSelected from "@/store/modalBlockSelected";
// import ModalLeadsFromLists from "@/views/ModalLeadsFromLists";
// import ModalBaseView from "@/views/ModalBaseViewPage";
// import { useRecoilValue } from "recoil";

// function SourceModal() {
//   const blockSelected = useRecoilValue(modalBlockSelected);
//   // Function to handle block selection

//   // Render the selected block component
//   const renderSelectedBlockComponent = () => {
//     switch (blockSelected?.title) {
//       case "Leads from List(s)":
//         return <ModalLeadsFromLists />;
//       case "Segment by Events":
//         return <ComponentForSegmentByEvents />;
//       case "Segment of List":
//         return <ComponentForSegmentOfList />;
//       case "Lead from CRM Integration":
//         return <ComponentForLeadFromCRMIntegration />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <ModalBaseView
//       title="Add a Source Block"
//       description="Pick a block & configure, any new leads that match rules will be added
//     to sequence automatically."
//     >
//       <div className="flex gap-4 py-4 px-2 h-full overflow-scroll">
//         <div className="overflow-y-auto">
//           <div>
//             <div className="font-bold text-xl">Sources</div>
//             <div>
//               <table>
//                 <tbody>
//                   {sourceBlockViews.map((node, key) =>
//                     key % 2 === 0 ? (
//                       <tr key={key}>
//                         <td className="p-4">
//                           <BlockSelector
//                             icon={node.icon}
//                             description={node.description}
//                             title={node.title}
//                           />
//                         </td>

//                         {key + 1 < sourceBlockViews.length && (
//                           <td className="p-4">
//                             <BlockSelector
//                               icon={sourceBlockViews[key + 1].icon}
//                               description={
//                                 sourceBlockViews[key + 1].description
//                               }
//                               title={sourceBlockViews[key + 1].title}
//                             />
//                           </td>
//                         )}
//                       </tr>
//                     ) : null
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </ModalBaseView>
//   );
// }

// function ComponentForSegmentByEvents() {
//   return <div>Component for Segment by Events</div>;
// }

// function ComponentForSegmentOfList() {
//   return <div>Component for Segment of List</div>;
// }

// function ComponentForLeadFromCRMIntegration() {
//   return <div>Component for Lead from CRM Integration</div>;
// }

// export default SourceModal;
