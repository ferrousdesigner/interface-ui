import './Pane.css'
import TestOverflow from './TestOverflow'

export interface PaneProps {
  children?: React.ReactNode;
}

export default function Pane({ children: _children }: PaneProps) {
  return  (
    <TestOverflow />
  )
}
