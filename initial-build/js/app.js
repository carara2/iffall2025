const flavorData = {
    coke: ["CocaCola_Cherry_200.png","CocaCola_CherryVanilla_200.png","CocaCola_Lime_200.png","CocaCola_Orange_200.png","CocaCola_Vanilla_200.png"],
    "diet-coke": ["DietCoke_Cherry_200.png","DietCoke_CherryVanilla_200.png","DietCoke_GingerLemon_200.png","DietCoke_Orange_200.png","DietCoke_Vanilla_200.png"],
    "coke-zero": ["CocaColaZero_Cherry_200.png","CocaColaZero_CherryVanilla_200.png","CocaColaZero_Lemon_200.png","CocaColaZero_Lime_200.png","CocaColaZero_Orange_200.png","CocaColaZero_Vanilla_200.png"],
    sprite: ["sprite-cherry-44.png","sprite-peach-46.png","sprite-strawberry-47.png"],
    "sprite-zero": ["sprite-zero-sugar-cherry-53.png","sprite-zero-sugar-orange-600.png","sprite-zero-sugar-peach-55.png","sprite-zero-sugar-strawberry-56.png","sprite-zero-sugar-vanilla-57.png"],
    pibb: ["Pibb_Cherry_200.png","Pibb_CherryVanilla_200.png"],
    fanta: ["Fanta Cherry.png","Fanta Fruit Punch.png","Fanta Lime.png","Fanta Orange.png","Fanta Peach.png", "Fanta Strawberry.png", "Fanta vanilla.png"],
    "fanta-zero": ["Fanta Zero Cherry.png","FantaZeroFruitPunch.png","FantaZeroLime.png","FantaZeroOrange.png","FantaZeroPeach.png", "FantaZeroStrawberry.png", "FantaZeroVanilla.png"],
    "pibb-zero": ["PibbZero_Cherry_200.png","PibbZero_CherryVanilla_200.png"],
    drpepper: ["DrPepper_Cherry_200.png","DrPepper_CherryVanilla_200.png"],
    "drpepper-diet": ["DrPepperDiet_Cherry_200.png","DrPepperDiet_CherryVanilla_200.png"],
    "mello-yello": ["MelloYello_Cherry_200.png","MelloYello_Limeade_200.png","MelloYello_Orange_200.png"],
    "mello-yello-zero": ["MelloYello_ZeroSugar_Cherry.png","MelloYello_ZeroSugar_Limeade.png","MelloYello_ZeroSugar_Orange.png"],
    vitaminwater: ["Vitaminwater_Lemonade_200.png","Vitaminwater_Orange_200.png"],
    "hi-c": ["HiC_Cherry_200.png","HiC_FruitPunch_200.png","HiC_Grape_200.png","HiC_Orange_200.png","HiC_Strawberry_200.png", "hi-c-pineapple.png"],
    seagrams: ["Seagrams_GingerAle_Cherry.png","Seagrams_GingerAle_Lime.png","Seagrams_GingerAle_Orange.png","Seagrams_GingerAle_Vanilla.png"],
    "seagrams-zero": ["Seagrams_ZeroSugar_Cherry.png","Seagrams_ZeroSugar_Lime.png","Seagrams_ZeroSugar_Orange.png","Seagrams_ZeroSugar_Vanilla.png"],
    "barqs-cream-soda": ["BarqsCremeSoda_Orange_200.png","BarqsCremeSoda_Strawberry_200.png"],
    "barqs-cream-soda-zero": ["Barqs_ZeroSugar_CremeSoda_Orange.png","Barqs_ZeroSugar_CremeSoda_Strawberry.png"],
    "mm-sparkling": ["MMSparkling-Lemonade.png"],
    "mm-lemonade": ["MMLemonades_Lemonade_200.png","MMLemonades_LemonLimeLemonade_200.png","MMLemonades_OrangeLemonade_200.png", "MMLemonades_StrawberryLemonade_200.png"],
    "mm-lemonade-zero": ["MMLemonadesZero_LemonLimeLemonade_200.png","MMLemonadesZero_OrangeLemonade_200.png","MMLemonadesZero_StrawberryLemonade_200.png"],
};


const modal = document.getElementById("flavor-modal");
const overlay = document.getElementById("overlay");
const modalMainImg = document.getElementById("modal-main-img");
const subGrid = document.getElementById("subflavor-grid");


document.querySelectorAll(".flavor-tile").forEach(tile => {
    tile.addEventListener("click", () => {
    const flavor = tile.dataset.flavor;

    const mainImg = tile.querySelector("img");
    modalMainImg.src = mainImg.getAttribute("src");
    modalMainImg.alt = mainImg.getAttribute("alt");

    const files = flavorData[flavor] || [];
    subGrid.innerHTML = files.map(file =>
      `<img src="images 2/${file}" alt="${flavor} sub-flavor">`
    ).join(""); 

    const flavorData2 = {
    powerade: ["Powerade_Cherry_200.png","Powerade_FruitPunch_200.png","Powerade_Lemon_200.png","Powerade_Lime_200.png","Powerade_Orange_200.png"],
    "powerade-zero": ["PoweradeZero_Cherry_200.png","PoweradeZero_FruitPunch_200.png","PoweradeZero_Lemon_200.png","PoweradeZero_Lime_200.png","PoweradeZero_Orange_200.png"],
    "mm-drinks": ["MMDrinks_Limeade_200.png","MMDrinks_Orange_200.png","MMDrinks_Peach_200.png"],
    "mm-drinks-zero": ["MMDrinksZero_Limeade_200.png","MMDrinksZero_Orange_200.png","MMDrinksZero_Peach_200.png"],
};

const files2 = flavorData2[flavor] || [];
    subGrid.innerHTML = files.map(file =>
      `<img src="images/${file}" alt="${flavor} sub-flavor">`
    ).join("");

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    });
});

function closeModal(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
document.querySelector(".close-modal").addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
