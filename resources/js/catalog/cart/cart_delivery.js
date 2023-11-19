class CartDelivery {
    constructor() {
        this.homeTab = document.querySelector('#home-tab');
        this.profileTab = document.querySelector('#profile-tab');
        this.contactTab = document.querySelector('#contact-tab');
        this.sendOrderButton = document.querySelector('.send-order');
        this.typeDelivery = document.querySelector('#typeDelivery');
        this.addressInput2 = document.querySelector('#addressInput2');
        this.addressInput = document.querySelector('#addressInput');
        this.selectedAddressInput = document.querySelector('#selectedAddressInput');
        this.suggestionsList2 = document.querySelector('#suggestionsList2');
        this.suggestionsList = document.querySelector('#suggestionsList');
        this.allPrice = 0; // Set your initial allPrice value here
        this.inputDeliveryPrice = null;

        this.setupEventListeners();
        console.log(this.addressInput);
    }

    setupEventListeners() {
        this.homeTab.addEventListener('click', () => this.handleHomeTabClick());
        this.profileTab.addEventListener('click', () => this.handleProfileTabClick());
        this.contactTab.addEventListener('click', () => this.handleContactTabClick());

        this.addressInput2.addEventListener('input', async () => this.handleAddressInput2Input());
        this.addressInput2.addEventListener('blur', async () => this.handleAddressInput2Blur());
        this.addressInput.addEventListener('input', async () => this.handleAddressInputInput());
        this.addressInput.addEventListener('blur', async () => this.handleAddressInputBlur());
    }

    handleHomeTabClick() {
        this.inputDeliveryPrice = '0';
        this.clearInputs();
        this.sendOrderButton.removeAttribute('disabled');
        this.typeDelivery.value = 1;
    }

    handleProfileTabClick() {
        this.inputDeliveryPrice = this.allPrice;
        this.clearInputs();
        this.sendOrderButton.setAttribute('disabled', 'disabled');
        this.typeDelivery.value = 2;
    }

    handleContactTabClick() {
        this.selectedAddressInput.value = '';
        this.addressInput2.value = '';
        this.sendOrderButton.setAttribute('disabled', 'disabled');
        this.typeDelivery.value = 3;
    }

    clearInputs() {
        this.addressInput2.value = '';
        this.selectedAddressInput.value = '';
    }
    async dadataQuery(value) {
        const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
        const token = "fbb3c8eb33ac925c249fe5c0d916d8b2fae40b25";
        const query = "";

        const options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({
                query: value,
                count: 5,
                locations_boost: [{ region_iso_code: "RU" }],
                from_bound: { value: "region" },
                to_bound: { value: "house" }
            })

        }

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return data.suggestions;
        } catch (error) {
            console.error(error);
        }
    }
    async dadataQuery2(value) {
        const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
        const token = "fbb3c8eb33ac925c249fe5c0d916d8b2fae40b25";

        const options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({
                query: value,
                count: 5,
                locations: [
                    {
                        city: "Санкт-Петербург",
                        restrict_value: true
                    }
                ],
                restrict_value: true,
                from_bound: { value: "settlement" },
                to_bound: { value: "house" }
            })
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return data.suggestions;
        } catch (error) {
            console.error(error);
            return []; // Return an empty array to indicate an error condition
        }
    }
    async handleAddressInput2Input() {
        clearTimeout(this.timeoutId2);

        const value = this.addressInput2.value.trim();

        if (!value) {
            this.suggestionsList2.innerHTML = '';
            this.selectedValue = '';
            this.selectedAddressInput.value = '';
            this.addressInput2.classList.remove('not-empty');
            this.sendOrderButton.setAttribute('disabled', 'disabled');
            return;
        } else {
            this.sendOrderButton.removeAttribute('disabled');
        }

        this.timeoutId2 = setTimeout(async () => {
            const suggestions = await this.dadataQuery2(value); // You need to define the dadataQuery2 function
            this.showSuggestions2(suggestions);
        }, 500);
    }
    async handleAddressInputInput() {
        clearTimeout(this.timeoutId);

        const value = this.addressInput.value.trim();

        if (!value) {
            this.suggestionsList.innerHTML = '';
            this.selectedValue = '';
            this.selectedAddressInput.value = '';
            this.addressInput.classList.remove('not-empty');
            this.sendOrderButton.setAttribute('disabled', 'disabled');
            return;
        } else {
            this.sendOrderButton.removeAttribute('disabled');
        }

        this.timeoutId = setTimeout(async () => {
            const suggestions = await this.dadataQuery(value); // You need to define the dadataQuery2 function
            this.showSuggestions(suggestions);
        }, 500);
    }
    showSuggestions2(suggestions) {
        this.suggestionsList2.innerHTML = '';

        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('li');
            suggestionItem.textContent = suggestion.value;
            suggestionItem.addEventListener('click', () => this.handleSuggestionItemClick2(suggestion));
            this.suggestionsList2.appendChild(suggestionItem);
        });

        if (suggestions.length === 1) {
            const selectedSuggestion = suggestions[0];
            this.selectedValue = selectedSuggestion.value;
            this.addressInput2.value = selectedSuggestion.value;
            this.selectedAddressInput.value = selectedSuggestion.value;
            this.suggestionsList2.innerHTML = '';
            this.addressInput2.classList.remove('not-empty');
        } else if (this.addressInput2.value.trim() !== '') {
            this.addressInput2.classList.add('not-empty');
        } else {
            this.addressInput2.classList.remove('not-empty');
        }
    }
    showSuggestions(suggestions) {
        this.suggestionsList.innerHTML = '';

        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('li');
            suggestionItem.textContent = suggestion.value;
            suggestionItem.addEventListener('click', () => this.handleSuggestionItemClick(suggestion));
            this.suggestionsList.appendChild(suggestionItem);
        });

        if (suggestions.length === 1) {
            const selectedSuggestion = suggestions[0];
            this.selectedValue = selectedSuggestion.value;
            this.addressInput.value = selectedSuggestion.value;
            this.selectedAddressInput.value = selectedSuggestion.value;
            this.suggestionsList.innerHTML = '';
            this.addressInput.classList.remove('not-empty');
        } else if (this.addressInput.value.trim() !== '') {
            this.addressInput.classList.add('not-empty');
        } else {
            this.addressInput.classList.remove('not-empty');
        }
    }
    handleSuggestionItemClick2(suggestion) {
        this.selectedValue = suggestion.value;
        this.addressInput2.value = suggestion.value;
        this.selectedAddressInput.value = suggestion.value;
        this.suggestionsList2.innerHTML = '';
        this.addressInput2.classList.remove('not-empty');
    }
    handleSuggestionItemClick(suggestion) {
        this.selectedValue = suggestion.value;
        this.addressInput.value = suggestion.value;
        this.selectedAddressInput.value = suggestion.value;
        this.suggestionsList.innerHTML = '';
        this.addressInput.classList.remove('not-empty');
    }
    async handleAddressInput2Blur() {
        if (this.suggestionsList2.children.length === 1) {
            this.selectedValue = this.suggestionsList2.children[0].textContent;
            this.addressInput2.value = this.selectedValue;
            this.selectedAddressInput.value = this.selectedValue;
            this.suggestionsList2.innerHTML = '';
            this.addressInput2.classList.remove('not-empty');
        }
    }
    async handleAddressInputBlur() {
        if (this.suggestionsList.children.length === 1) {
            this.selectedValue = this.suggestionsList.children[0].textContent;
            this.addressInput.value = this.selectedValue;
            this.selectedAddressInput.value = this.selectedValue;
            this.suggestionsList.innerHTML = '';
            this.addressInput.classList.remove('not-empty');
        }
    }
}
export default CartDelivery;
