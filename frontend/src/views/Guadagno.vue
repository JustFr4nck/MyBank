<template>
    <div class="flex flex-col justify-center h-screen items-center text-base luckiest-guy-regular ">

        <div class="flex flex-col items-center w-96 bg-white rounded-lg pt-10 pb-10 pl-10 pr-10 border-2 space-y-4">

            <input class="bg-gray-100 text-black text-center  w-full px-3 py-2 rounded" type="number" max="999999"
                min="0" placeholder="Inserisci guadagno" id="guadagno">

            <input class="bg-gray-100 text-black text-center w-full px-3 py-2 rounded" type="text"
                placeholder="Inserisci movimento" id="movimento">

            <div
                class="bg-success rounded-lg w-full px-3 text-center transition-transform duration-300 hover:scale-110 cursor-pointer ">
                <button @click="setVoid" class="py-2">Guadagno 🤑​</button>

                <div ref="particleContainer" class=" inset-0 pointer-events-none relative"></div>

            </div>

            <div v-if="showAlert" role="alert" class="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>ERRORE: compila entrambi i campi nel modo corretto</span>
            </div>
            <div v-if="showAdd" role="alert" class="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Dati inseriti con successso!</span>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

import { ref } from 'vue';

const showAlert = ref(false);
const showAdd = ref(false);

function setVoid() {

    const guadagno = document.getElementById("guadagno") as HTMLInputElement | null;
    const movimento = document.getElementById("movimento") as HTMLInputElement | null;

    if (guadagno && movimento && guadagno.value && movimento.value) {

        guadagno.value = '';
        movimento.value = '';

        showAdd.value = true;
        showAlert.value = false;
        setTimeout(() => {

            showAdd.value = false;
        }, 5000);
        

    }
    else {
        showAlert.value = true;
        showAdd.value = false;
        setTimeout(() => {
            showAlert.value = false;
        }, 5000);
        


        console.log("Alert mostrato:", showAlert.value)
    }



}
</script>