import { BaseEdge, EdgeProps, getStraightPath } from "reactflow";

export default function CustomAddEdge({ id, sourceX, sourceY }: EdgeProps) {
  const customTargetX = sourceX;
  const customTargetY = sourceY + 150;
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX: customTargetX,
    targetY: customTargetY,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
    </>
  );
}
