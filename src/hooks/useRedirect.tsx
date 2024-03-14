import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function UseRedirect() {
    const [isRedirecting, setIsRedirecting] = useState(false);
    const router = useRouter();
    const params = usePathname();
    const queryParams = useSearchParams();

    const redirectTo = async (destination?: string) => {
        if (destination && params !== destination) {
            setIsRedirecting(true);
            await router.push(destination!);
        } else if (!destination) {
            setIsRedirecting(true);
        }
    };

    useEffect(() => {
        setIsRedirecting(false);
    }, [params, setIsRedirecting, queryParams]);


    return { redirectTo, isRedirecting };
}