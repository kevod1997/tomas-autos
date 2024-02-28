import { Title } from "@/components";
import { CarDataForm } from "./ui/CarDataForm";
import { GridInfoCard } from "./ui/GridInfoCard";

export const metadata = {
  title: 'Vende',
  description: 'Completa el formulario para que podamos ayudarte a vender tu auto.',
};

export default function sellPage() {
  return (
    <div className="my-12 sm:mx-44 ">
      <div className="flex justify-start pt-4 mx-4 sm:mx-0">
        <Title
          title="Vende tu auto"
          subtitle="Completa el formulario"
          className="p-2"
        />
      </div>
      {/* Cards */}
      <GridInfoCard />
      {/* Formulario */}
      <CarDataForm />
    </div>

  );
}