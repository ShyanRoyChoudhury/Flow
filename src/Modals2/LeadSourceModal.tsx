import { QuestionSVG } from "@/SVGs/SVG";
import BlockSelector from "@/components/BlockSelector";
import { sourceBlockViews } from "@/nodes";

function SourceBlockModal() {
  return (
    <div className=" w-full">
      <div className="mx-auto py-4 w-full border-b">
        <div className="text-lg font-black text-gray-800 flex items-center space-x-1 ">
          <div className="font-bold text-xl">Add a Source Block</div>
          <div>
            <QuestionSVG />
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Pick a block & configure, any new leads that match rules will be added
          to sequence automatically.
        </p>
      </div>

      <div className="flex gap-4 py-4 px-2 h-full overflow-scroll">
        <div className="overflow-y-auto w-full">
          <div>
            <div className="flex gap-4 py-4 px-2 w-full">
              <div>
                <div>
                  <div className="font-bold text-xl">Sources</div>
                  <div>
                    <table>
                      <tbody>
                        {sourceBlockViews.map((node, key) =>
                          key % 2 === 0 ? (
                            <tr key={key}>
                              <td className="p-4">
                                <BlockSelector
                                  icon={node.icon}
                                  description={node.description}
                                  title={node.title}
                                />
                              </td>

                              {key + 1 < sourceBlockViews.length && (
                                <td className="p-4">
                                  <BlockSelector
                                    icon={sourceBlockViews[key + 1].icon}
                                    description={
                                      sourceBlockViews[key + 1].description
                                    }
                                    title={sourceBlockViews[key + 1].title}
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
                {/* <div className="font-bold text-xl">TEST</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SourceBlockModal;
