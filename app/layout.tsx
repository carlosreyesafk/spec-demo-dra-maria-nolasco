export const metadata = {
  title: "Clínica Dental Dra. María Nolasco | Odontología en Invivienda, Santo Domingo Este",
  description:
    "Clínica Dental Dra. María Nolasco — cuidado dental integral en Invivienda, Santo Domingo Este. Limpieza, ortodoncia, implantes, endodoncia, prótesis y estética dental. Agenda tu cita: (809) 414-8517.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
