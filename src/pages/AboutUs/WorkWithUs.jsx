export default function WorkWithUs() {
  return (
    <article>
      <h1 className="text-3xl font-bold">Trabaja con nosotros</h1>
      <p className="py-4">
        En DistriQuesos CHARLES, creemos que nuestros empleados son la base de
        nuestro éxito. Valoramos el bienestar y el crecimiento de nuestro
        equipo, y estamos comprometidos en brindar un entorno de trabajo que
        fomente la excelencia, la colaboración y el desarrollo personal y
        profesional.
      </p>
      <p className="py-4">
        Si buscas ser parte de la familia Charles escríbenos y pregunta por las
        ofertas disponibles.
      </p>
      <div className="flex my-12">
        <img
          src="/image.png"
          alt="Foto"
          width={400}
          height={450}
          className="aspect-[25:29]"
        />
        <div className="flex flex-col justify-center items-center text-balance text-center">
          <h4 className="text-xl font-bold italic">¡Te Estamos Buscando! 🌟</h4>
          <p>
            En busca de personas apasionadas y talentosas que deseen unirse a
            nuestro equipo. Si compartes nuestra visión y valores, si eres
            proactivo, creativo y estás listo para marcar la diferencia,
            ¡queremos conocerte!
          </p>
        </div>
      </div>
    </article>
  )
}
