'use client'

import { Suspense } from "react";
import { CarFilter } from "./CarFilter";

export const CarFIlterWithSuspense = () => {
    return (
        <Suspense>
        <CarFilter />
        </Suspense>
    );
    }