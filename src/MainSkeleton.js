import React from 'react';
import CardSkeleton from './CardSkeleton';
import HeaderSkeleton from './HeaderSkeleton';


export default function MainSkeleton() {
    return (
        <>
        <HeaderSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>    
        </>
    )
}
