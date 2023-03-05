export default function Header() {
    return (
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Octopus Energy</span>
            <img className="h-8 w-auto" src="octopus-logo.svg" alt="Octopus Energy Logo" />
          </a>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <img className="h-8 w-auto" src="basket.svg" alt="Basekt" />
        </div>
      </nav>
    )
  }