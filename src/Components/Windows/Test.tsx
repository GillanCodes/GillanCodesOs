import { WindowOptions } from "../Window";

export const tOp:WindowOptions = {
    height: 200,
    width:200,
    maxHeight: 600,
    maxWidth: 600,
    minHeight: 100,
    minWidth: 100,
    x: 100,
    y: 100
}

export default function Test() {
  return (
    <div className="window-body">Test</div>
  )
}
