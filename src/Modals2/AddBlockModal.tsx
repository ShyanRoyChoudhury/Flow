import { QuestionSVG } from "@/SVGs/SVG";
import BlockSelector from "@/components/BlockSelector";
import { outreachBlockViews } from "@/nodes";

function AddBlockModal() {
  return (
    <div className=" w-full">
      <div className="mx-auto py-4 w-full border-b">
        <div className="text-lg font-black text-gray-800 flex items-center space-x-1 ">
          <div className="font-bold text-xl">Add Blocks</div>
          <div>
            <QuestionSVG />
          </div>
        </div>
        <p className="text-sm text-gray-500">
          {/* Click on a block to configure and add it in sequence. */}
          Click on a block to configure and add it in sequence.
        </p>
      </div>

      <div className="flex gap-4 py-4 px-2 h-full overflow-scroll">
        <div className="overflow-y-auto w-full">
          <div>
            <div className="flex gap-4 py-4 px-2 w-full">
              <div>
                <div>
                  <div className="font-bold text-xl">Outreach</div>
                  <div>
                    <table>
                      <tbody>
                        {outreachBlockViews.map((node, key) =>
                          key % 2 === 0 ? (
                            <tr key={key}>
                              <td className="p-4">
                                <BlockSelector
                                  icon={node.icon}
                                  description={node.description}
                                  title={node.title}
                                />
                              </td>

                              {key + 1 < outreachBlockViews.length && (
                                <td className="p-4">
                                  <BlockSelector
                                    icon={outreachBlockViews[key + 1].icon}
                                    description={
                                      outreachBlockViews[key + 1].description
                                    }
                                    title={outreachBlockViews[key + 1].title}
                                  />
                                </td>
                              )}
                            </tr>
                          ) : null
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="font-bold text-xl">Conditions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function ComponentForSegmentByEvents() {
//   return <div>Component for Segment by Events</div>;
// }

// function ComponentForSegmentOfList() {
//   return <div>Component for Segment of List</div>;
// }

// function ComponentForLeadFromCRMIntegration() {
//   return <div>Component for Lead from CRM Integration</div>;
// }

export default AddBlockModal;
