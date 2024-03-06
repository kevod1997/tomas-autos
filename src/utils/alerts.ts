// alertas.ts
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

export const MySwal = withReactContent(Swal);

// Alerta básica
export const mostrarAlerta = (opciones: SweetAlertOptions): Promise<SweetAlertResult> => {
  return MySwal.fire(opciones);
};

// Alerta de confirmación
export const mostrarAlertaConfirmacion = (text: string, html: string): Promise<SweetAlertResult> => {
  return MySwal.fire({
    title: '¿Estás seguro?',
    text: text,
    html: html,
    icon: 'warning',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro',
  });
};

// Alerta de éxito
export const mostrarAlertaExito = (mensaje: string): Promise<SweetAlertResult> => {
  return MySwal.fire({
    title: '¡Éxito!',
    text: mensaje,
    icon: 'success',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Genial',
  });
};

// Alerta de error
export const mostrarAlertaError = (mensaje: string): Promise<SweetAlertResult> => {
  return MySwal.fire({
    title: 'Error',
    text: mensaje,
    icon: 'error',
    confirmButtonColor: '#d33',
    confirmButtonText: 'OK',
  });
};
