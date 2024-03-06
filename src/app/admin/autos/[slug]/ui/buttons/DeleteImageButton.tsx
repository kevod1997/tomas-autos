import { deleteCarImage } from "@/actions";
import { CarImage } from "@/interfaces";
import { mostrarAlertaConfirmacion, mostrarAlertaError, mostrarAlertaExito } from "@/utils";

interface Props {
  image: CarImage;
}

export const DeleteImageButton = ({ image }: Props) => {
    const handleDelete = async () => {
        const resultado = await mostrarAlertaConfirmacion(
          '¿Estás seguro?',
          `Vas a eliminar la siguiente imagen:<br><br>
          <div style="text-align: center;">
              <img src="${image.url}" style="max-height: 50%; max-width: 50%; border-radius: 5px; display: inline-block;">
          </div>
          <br>Esta acción no se puede revertir. ¿Quieres continuar?`
        );
        if (resultado.isConfirmed) {
        try {
            await deleteCarImage(image.id, image.url); 
            mostrarAlertaExito('La Imagen ha sido borrada exitosamente.');
        } catch (error) {
            mostrarAlertaError('Ocurrió un error al intentar borrar la imagen.');
        }
        }
    };
    return (
        <button
        type="button"
        onClick={() => handleDelete()}
        className="btn-danger w-full rounded-b-xl"
      >
        Eliminar
      </button>
    );
    }
