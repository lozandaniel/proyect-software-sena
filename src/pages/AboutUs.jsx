import { NavLink, Route, Routes } from 'react-router-dom'
import About from './AboutUs/About'
import WorkWithUs from './AboutUs/WorkWithUs'
import Error from './Error'

export default function AboutUs() {
  return (
    <>
      <div className="my-14 flex w-full flex-col md:flex-row">
        <aside className="w-full items-center text-left font-bold md:w-2/5 md:flex-col">
          <ul className="my-6 flex flex-row items-center justify-center gap-4 md:my-0 md:flex-col md:justify-start">
            <li>
              <NavLink to="/quienes-somos">¿Quienes Somos?</NavLink>
            </li>
            <li>
              <NavLink
                to="trabaja-con-nosotros"
                className={({ isActive }) =>
                  isActive ? 'text-primaryColor' : ''
                }
              >
                Trabaja con nosotros
              </NavLink>
            </li>
            <li>
              {/* <NavLink
                to="preguntas-frecuentes"
                className={({ isActive }) =>
                  isActive ? 'text-primaryColor' : ''
                }
              >
                Preguntas frecuentes
              </NavLink> */}
            </li>
          </ul>
        </aside>

        <section className="w-full">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="trabaja-con-nosotros" element={<WorkWithUs />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </section>
      </div>
    </>
  )
}
