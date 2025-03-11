const allowedTerms = [
    "Affenpinscher (dog)", "Afghan Hound (dog)", "Africanis (dog)", "Aidi (dog)", "Airedale Terrier (dog)", "Akbash (dog)", 
    "Akita (dog)", "Aksaray Malaklisi (dog)", "Alano Español (dog)", "Alapaha Blue Blood Bulldog (dog)", "Alaskan Husky (dog)", 
    "Alaskan Klee Kai (dog)", "Alaskan Malamute (dog)", "Alopekis (dog)", "Alpine Dachsbracke (dog)", "American Bulldog (dog)", 
    "American Bully (dog)", "American Cocker Spaniel (dog)", "American English Coonhound (dog)", "American Eskimo Dog (dog)", 
    "American Foxhound (dog)", "American Hairless Terrier (dog)", "American Leopard Hound (dog)", "American Pit Bull Terrier (dog)", 
    "American Staffordshire Terrier (dog)", "American Water Spaniel (dog)", "Andalusian Terrier (dog)", 
    "Anglo-Français de Petite Vénerie (dog)", "Appenzeller Sennenhund (dog)", "Ariège Pointer (dog)", "Ariégeois (dog)", 
    "Argentine Pila (dog)", "Armant (dog)", "Armenian Gampr (dog)", "Artois Hound (dog)", "Australian Cattle Dog (dog)", 
    "Australian Kelpie (dog)", "Australian Shepherd (dog)", "Australian Silky Terrier (dog)", "Australian Stumpy Tail Cattle Dog (dog)", 
    "Australian Terrier (dog)", "Austrian Black and Tan Hound (dog)", "Austrian Pinscher (dog)", "Azawakh (dog)", "Bắc Hà (dog)", 
    "Bakharwal (dog)", "Banjara Hound (dog)", "Bankhar Dog (dog)", "Barak hound (dog)", "Barbado da Terceira (dog)", 
    "Barbet (dog)", "Basenji (dog)", "Basque Shepherd Dog (dog)", "Basset Artésien Normand (dog)", "Basset Bleu de Gascogne (dog)", 
    "Basset Fauve de Bretagne (dog)", "Basset Hound (dog)", "Bavarian Mountain Hound (dog)", "Beagle (dog)", "Beagle-Harrier (dog)", 
    "Bearded Collie (dog)", "Beauceron (dog)", "Bedlington Terrier (dog)", "Belgian Shepherd (dog)", "Bergamasco Shepherd (dog)", 
    "Berger Picard (dog)", "Bernese Mountain Dog (dog)", "Bichon Frisé (dog)", "Biewer Terrier (dog)", "Billy (dog)", 
    "Black and Tan Coonhound (dog)", "Black Norwegian Elkhound (dog)", "Black Russian Terrier (dog)", "Black Mouth Cur (dog)", 
    "Bloodhound (dog)", "Blue Lacy (dog)", "Blue Picardy Spaniel (dog)", "Bluetick Coonhound (dog)", "Boerboel (dog)", 
    "Bohemian Shepherd (dog)", "Bohemian Spotted Dog (dog)", "Bolognese (dog)", "Border Collie (dog)", "Border Terrier (dog)", 
    "Borzoi (dog)", "Boston Terrier (dog)", "Bouvier des Flandres (dog)", "Boxer (dog)", "Boykin Spaniel (dog)", 
    "Bracco Italiano (dog)", "Briard (dog)", "Brittany (dog)", "Brussels Griffon (dog)", "Bull Terrier (dog)", "Bulldog (dog)", 
    "Bullmastiff (dog)", "Cairn Terrier (dog)", "Canaan Dog (dog)", "Cane Corso (dog)", "Cardigan Welsh Corgi (dog)", 
    "Cavalier King Charles Spaniel (dog)", "Chesapeake Bay Retriever (dog)", "Chihuahua (dog)", "Chinese Crested (dog)", 
    "Chinese Shar-Pei (dog)", "Chinook (dog)", "Chow Chow (dog)", "Cirneco dell'Etna (dog)", "Clumber Spaniel (dog)", 
    "Cockapoo (dog)", "Cocker Spaniel (dog)", "Collie (dog)", "Coonhound (dog)", "Corgi (dog)", "Cotons de Tulear (dog)", 
    "Curly-Coated Retriever (dog)", "Dachshund (dog)", "Dalmatian (dog)", "Dandie Dinmont Terrier (dog)", "Doberman Pinscher (dog)", 
    "Dogo Argentino (dog)", "Dogue de Bordeaux (dog)", "Dutch Shepherd (dog)", "English Bulldog (dog)", "English Cocker Spaniel (dog)", 
    "English Setter (dog)", "English Springer Spaniel (dog)", "Entlebucher Mountain Dog (dog)", "Field Spaniel (dog)", 
    "Finnish Lapphund (dog)", "Finnish Spitz (dog)", "Flat-Coated Retriever (dog)", "French Bulldog (dog)", "German Pinscher (dog)", 
    "German Shepherd (dog)", "German Shorthaired Pointer (dog)", "German Wirehaired Pointer (dog)", "Giant Schnauzer (dog)", 
    "Glen of Imaal Terrier (dog)", "Goldador (dog)", "Golden Retriever (dog)", "Goldendoodle (dog)", "Gordon Setter (dog)", 
    "Great Dane (dog)", "Great Pyrenees (dog)", "Greater Swiss Mountain Dog (dog)", "Harrier (dog)", "Havanese (dog)", 
    "Irish Setter (dog)", "Irish Terrier (dog)", "Irish Water Spaniel (dog)", "Italian Greyhound (dog)", "Jack Russell Terrier (dog)", 
    "Japanese Chin (dog)", "Keeshond (dog)", "Kerry Blue Terrier (dog)", "King Charles Spaniel (dog)", "Klee Kai (dog)", 
    "Labrador Retriever (dog)", "Lagotto Romagnolo (dog)", "Lakeland Terrier (dog)", "Lhasa Apso (dog)", "Löwchen (dog)", 
    "Maltese (dog)", "Manchester Terrier (dog)", "Maremma Sheepdog (dog)", "Miniature Bull Terrier (dog)", "Miniature Pinscher (dog)", 
    "Miniature Schnauzer (dog)", "Newfoundland (dog)", "Norfolk Terrier (dog)", "Norwegian Elkhound (dog)", "Norwegian Lundehund (dog)", 
    "Old English Sheepdog (dog)", "Otterhound (dog)", "Papillon (dog)", "Parson Russell Terrier (dog)", "Pekingese (dog)", 
    "Pembroke Welsh Corgi (dog)", "Petit Basset Griffon Vendéen (dog)", "Pharaoh Hound (dog)", "Plott (dog)", "Pointer (dog)", 
    "Polish Lowland Sheepdog (dog)", "Pomeranian (dog)", "Poodle (dog)", "Portuguese Water Dog (dog)", "Pug (dog)", "Puli (dog)", 
    "Pumi (dog)", "Rat Terrier (dog)", "Redbone Coonhound (dog)", "Rhodesian Ridgeback (dog)", "Rottweiler (dog)", 
    "Saint Bernard (dog)", "Saluki (dog)", "Samoyed (dog)", "Schipperke (dog)", "Schnauzer (dog)", "Scottish Deerhound (dog)", 
    "Scottish Terrier (dog)", "Sealyham Terrier (dog)", "Shetland Sheepdog (dog)", "Shiba Inu (dog)", "Shih Tzu (dog)", 
    "Siberian Husky (dog)", "Silky Terrier (dog)", "Skye Terrier (dog)", "Sloughi (dog)", "Spanish Water Dog (dog)", 
    "Spinone Italiano (dog)", "Staffordshire Bull Terrier (dog)", "Standard Schnauzer (dog)", "Sussex Spaniel (dog)", 
    "Swedish Vallhund (dog)", "Tibetan Mastiff (dog)", "Tibetan Spaniel (dog)", "Tibetan Terrier (dog)", "Toy Fox Terrier (dog)", 
    "Vizsla (dog)", "Weimaraner (dog)", "Welsh Springer Spaniel (dog)", "West Highland White Terrier (dog)", "Whippet (dog)", 
    "Wire Fox Terrier (dog)", "Wirehaired Pointing Griffon (dog)", "Xoloitzcuintli (dog)", "Yorkshire Terrier (dog)", 
    "Abyssinian (cat)", "Aegean (cat)", "American Bobtail (cat)", "American Curl (cat)", "American Ringtail (cat)", 
    "American Shorthair (cat)", "American Wirehair (cat)", "Aphrodite Giant (cat)", "Arabian Mau (cat)", "Asian (cat)", 
    "Asian Semi-longhair (cat)", "Australian Mist (cat)", "Balinese (cat)", "Bambino (cat)", "Bengal (cat)", "Birman (cat)", 
    "Bombay (cat)", "Brazilian Shorthair (cat)", "British Longhair (cat)", "British Shorthair (cat)", "Burmese (cat)", 
    "Burmilla (cat)", "California Spangled (cat)", "Chantilly-Tiffany (cat)", "Chartreux (cat)", "Chausie (cat)", 
    "Colorpoint Shorthair (cat)", "Cornish Rex (cat)", "Cymric (cat)", "Cyprus (cat)", "Devon Rex (cat)", "Donskoy (cat)", 
    "Dragon Li (cat)", "Dwelf (cat)", "Egyptian Mau (cat)", "European Shorthair (cat)", "Exotic Shorthair (cat)", 
    "Foldex (cat)", "German Rex (cat)", "Havana Brown (cat)", "Highlander (cat)", "Himalayan (cat)", "Japanese Bobtail (cat)", 
    "Javanese (cat)", "Kanaani (cat)", "Karelian Bobtail (cat)", "Khao Manee (cat)", "Kinkalow (cat)", "Korat (cat)", 
    "Korean Bobtail (cat)", "Korn Ja (cat)", "Kurilian Bobtail (cat)", "Lambkin (cat)", "LaPerm (cat)", "Lykoi (cat)", 
    "Maine Coon (cat)", "Manx (cat)", "Mekong Bobtail (cat)", "Minskin (cat)", "Minuet (cat)", "Munchkin (cat)", 
    "Nebelung (cat)", "Neva Masquerade (cat)", "Norwegian Forest cat (cat)", "Ocicat (cat)", "Ojos Azules (cat)", 
    "Oriental Bicolor (cat)", "Oriental Longhair (cat)", "Oriental Shorthair (cat)", "Persian (cat)", "Peterbald (cat)", 
    "Pixie-bob (cat)", "Ragamuffin (cat)", "Ragdoll (cat)", "Raas (cat)", "Russian Blue (cat)", "Russian White (cat)", 
    "Sam Sawet (cat)", "Savannah (cat)", "Scottish Fold (cat)", "Selkirk Rex (cat)", "Serengeti (cat)", "Siamese (cat)", 
    "Siberian (cat)", "Singapura (cat)", "Snowshoe (cat)", "Sokoke (cat)", "Somali (cat)", "Sphynx (cat)", "Suphalak (cat)", 
    "Thai (cat)", "Thai Lilac (cat)", "Tonkinese (cat)", "Toybob (cat)", "Toyger (cat)", "Turkish Angora (cat)", 
    "Turkish Van (cat)", "Turkish Vankedisi (cat)", "Ukrainian Levkoy (cat)", "York Chocolate (cat)"
];



function showSuggestions() {
    const input = document.getElementById('searchInput');
    const autocomplete = document.getElementById('autocomplete');
    const query = input.value.toLowerCase();

    autocomplete.innerHTML = "";
    
    if (!query) {
        autocomplete.style.display = "none";
        return;
    }
    
    const matches = allowedTerms.filter(term => term.toLowerCase().includes(query));
    
    if (matches.length === 0) {
        autocomplete.style.display = "none";
        return;
    }
    
    matches.forEach(match => {
        const div = document.createElement("div");
        div.textContent = match;
        div.onclick = function() {
            input.value = match;
            autocomplete.style.display = "none";
        };
        autocomplete.appendChild(div);
    });
    
    autocomplete.style.display = "block";
}

function searchWiki() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const matchedTerm = allowedTerms.find(term => term.toLowerCase() === query);

    if (!matchedTerm) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = "";
        const articleDiv = document.createElement('div');
        articleDiv.innerHTML = 'Error! Invalid search term entered.';
        resultsDiv.appendChild(articleDiv);
        return;
    }

    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&origin=*&srlimit=3`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = "";

            data.query.search.forEach(article => {
                const title = article.title;
                const snippet = article.snippet;
                const link = `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;

                const articleDiv = document.createElement('div');
                articleDiv.innerHTML = `<h3><a class="wikilink" href="${link}" target="_blank">${title}</a></h3><p class="wikipara">${snippet}...</p>`;
                resultsDiv.appendChild(articleDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}