/*
Student Name: Tak Kam Cheng
Student Id: 301429108
Date: 26 Sep 2024
File: project1 js
*/

let offset = 0;
const limit = 9;
const maxPokemon = 151;

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() 
{
  loadPokemon(offset, limit);
  console.log("Loading poke")
  window.addEventListener("scroll", handleScroll);
}

async function loadPokemon(offset, limit) 
{
  console.log(`Loading Id ${offset+1} to ${offset+limit}`);
  for (let i = offset + 1; i <= offset + limit && i <= maxPokemon; i++) 
  {
    const pokemonData = await fetchPokemon(i);
    displayPokemon(pokemonData);
  }
}

async function fetchPokemon(id) 
{
  console.log(`Getting info for poke Id -> ${id}`);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  console.log("Got info for poke");
  return data;
}

function displayPokemon(pokemon) 
{
    const pokemonList = document.getElementById("pokemon-list"); 
    console.log(`display poke works`)
  
    const card = document.createElement("div");
    card.className = "pokemon-card";
  
    const img = document.createElement("img");
    img.src = "./images/loading.webp"; 
    const actualImageSrc = pokemon.sprites.other['official-artwork'].front_default;
  
    const name = document.createElement("h3");
    name.textContent = pokemon.name; 
  
    card.appendChild(img);
    card.appendChild(name);
  
    card.addEventListener("click", () => showModal(pokemon));
  
    pokemonList.appendChild(card);
  
    const tempImage = new Image();
    tempImage.onload = () => 
    {
      img.src = tempImage.src; 
    };
    tempImage.src = actualImageSrc; 
  
    offset += 1; 
  }

function handleScroll() 
{
  console.log("scrolled");
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && offset < maxPokemon) 
  {
    console.log("moving to load poke");
    loadPokemon(offset, limit);
  }
}

function showModal(pokemon) 
{
  console.log("Showing poke!")
  const pokemonModal = document.getElementById("pokemon-modal");
  const pokemonName = document.getElementById("pokemon-name");
  const pokemonImage = document.getElementById("pokemon-image");
  const pokemonId = document.getElementById("pokemon-id");
  const pokemonTypes = document.getElementById("pokemon-types");
  const pokemonAbilities = document.getElementById("pokemon-abilities");

  pokemonName.textContent = pokemon.name;
  pokemonImage.src = pokemon.sprites.other['official-artwork'].front_default;
  pokemonId.textContent = `ID: ${pokemon.id}`;
  pokemonTypes.textContent = `Type: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}`;
  pokemonAbilities.textContent = `Abilities: ${pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}`;

  pokemonModal.classList.remove("hidden");
  pokemonModal.addEventListener("click", closeModal);
}

function closeModal() 
{
  console.log("Closing poke");
  const pokemonModal = document.getElementById("pokemon-modal");
  pokemonModal.classList.add("hidden");
  pokemonModal.removeEventListener("click", closeModal);
}
