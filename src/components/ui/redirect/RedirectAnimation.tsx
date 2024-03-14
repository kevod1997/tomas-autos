import { ImSpinner2 } from "react-icons/im";

interface Props {
    isRedirecting: boolean;
    
}

export function RedirectAnimation({ isRedirecting }: Props) {
    if (!isRedirecting) return null;
  
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <ImSpinner2 size={75} className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }