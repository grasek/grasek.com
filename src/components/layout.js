import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = [`${__PATH_PREFIX__}/`, `${__PATH_PREFIX__}/reports/`, `${__PATH_PREFIX__}/projects/`, `${__PATH_PREFIX__}/partnership/`]
  const isRootPath = rootPath.includes(location.pathname)
  let header, navigation

  if (isRootPath) {
    header = (
      <div className="main-heading">
        <h4>
          <Link to="/">{title}</Link>
        </h4>
        <div className="navigation">
          <p> <Link to="/reports/" style={{ color: location.pathname === "/reports/" ? "black" : "inherit" }}>reports</Link></p>
          <p><Link to="/projects/" style={{ color: location.pathname === "/projects/" ? "black" : "inherit" }}>projects</Link></p>
          <p><Link to="/partnership/" style={{ color: location.pathname === "/partnership/" ? "black" : "inherit" }}>partnership</Link></p>
        </div>
      </div>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        {navigation}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
