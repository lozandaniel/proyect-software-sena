import { Routes, Route, NavLink } from 'react-router-dom'
import WorkWithUs from './AboutUs/WorkWithUs'
import Error from './Error'
import About from './AboutUs/About'

export default function AboutUs() {
  return (
    <>
      <div className="flex w-full my-14 flex-col md:flex-row">
        <aside className="md:w-2/5 w-full font-bold text-left md:flex-col items-center">
          <ul className="gap-4 flex flex-row md:flex-col items-center justify-center md:justify-start my-6 md:my-0">
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
              <NavLink
                to="preguntas-frecuentes"
                className={({ isActive }) =>
                  isActive ? 'text-primaryColor' : ''
                }
              >
                Preguntas frecuentes
              </NavLink>
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
