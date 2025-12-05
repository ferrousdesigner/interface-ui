import { Button } from '../../../components/Button/Button'
import './Nav.css'

export default function Header() {
  return (
    <div className="nav">
      <div className="nav-left">
        <div className="nav-left-logo">
          Inter<span className="nav-left-logo-span">face</span>
        </div>
      </div>
      <div className="nav-right">
        <Button>Documentation</Button>
        <Button>Github</Button>
      </div>
    </div>
  )
}
