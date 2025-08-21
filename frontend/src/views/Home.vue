<template>
     <div class="flex flex-col justify-center items-center h-screen">
    
        <h1 class="luckiest-guy-regular ">Saldo totale</h1>
        <h2 class="luckiest-guy-regular">€ {{  }}</h2>

        
            <div class="join mt-5 w-60">
                <RouterLink class="btn mybtn join-item bg-success w-1/2 rounded mr-2" :to="{name: 'guadagno'}">
                
                        <span class="text1">Guadagno</span>
                        <span class="text2">💸​</span>
            
                </RouterLink>
                <RouterLink class="btn mybtn join-item bg-error w-1/2 rounded ml-2" :to="{name: 'spesa'}">
                        <span class="text1">Spesa</span>
                        <span class="text2">💰​</span>
                </RouterLink>

            </div>
            <div class="join mt-5">
                <button class="btn join-item bg-info w-69 rounded ml-2">Movimenti</button>
            </div>

        
    </div>
</template>