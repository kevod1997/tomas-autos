import prisma from '../lib/prisma';


async function main() {
  const brands = [
    'Toyota', 'Ford', 'Volkswagen', 'Citroen', 'Mercedes-Benz',
    'BMW', 'Honda', 'Chevrolet', 'Nissan', 'Audi', 'Hyundai',
    'Kia', 'Peugeot', 'Fiat', 'Renault', 'Mazda', 'Subaru',
    'Jaguar', 'Land Rover', 'Mitsubishi', 'Volvo', 'Cadillac',
    'Dodge', 'Jeep', 'Chrysler', 'GMC', 'Ram', 'Alfa Romeo',
  ];

  for (const name of brands) {
    await prisma.brand.create({
      data: { name },
    });
  }

  const tags = ['0KM', 'Oferta', 'Exclusivo'];

  for (const name of tags) {
    await prisma.tag.create({
      data: { name },
    });
  }

  const fuels = ['Gas', 'Nafta', 'Diesel', 'Hibrido', 'Electrico'];

  for (const name of fuels) {
    await prisma.fuel.create({
      data: { name },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
