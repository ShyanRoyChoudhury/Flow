import { NodeTypes } from "reactflow";
import AddBlock from "./AddBlock";
import DelayBlock from "./DelayBlock";
import EmailBlock from "./EmailBlock";
import SequenceStartPoint from "./SequenceStartPoint";
import { PositionLoggerNode } from "./PositionLogger";
import SourceBlock from "./SourceBlock";

import LeadsFromListBlock from "./LeadsFromListBlock";
import EndSequenceBlock from "./EndSequenceBlock";

const nodeTypes = {
  SequenceStart: SequenceStartPoint,
  EmailBlock: EmailBlock,
  DelayBlock: DelayBlock,
  AddBlock: AddBlock,
  SourceBlock: SourceBlock,
  "position-logger": PositionLoggerNode,
  LeadsFromList: LeadsFromListBlock,
  EndSequenceBlock: EndSequenceBlock,
} satisfies NodeTypes;

export default nodeTypes;
