<template>
    <div class="chip-input">
    <div class="chips">
        <div v-for="chip in chips" :key="chip" class="chip">
        {{ chip }}
        <span class="remove-chip" @click="removeChip(chip)">x</span>
        </div>
        <input
        v-model="inputValue"
        @keyup.enter="addChip"
        @keydown.backspace="handleBackspace"
        placeholder="Type and hit enter..."
        />
    </div>
    </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

// Define props and emits
const props = defineProps({
    modelValue: {
    type: Array,
    default: () => []
    }
});
const emit = defineEmits(['update:modelValue']);

// Reactive reference for internal chips state
const chips = ref([...props.modelValue]);

// Watch for changes in props to sync with internal state
watch(() => props.modelValue, (newVal) => {
    chips.value = [...newVal];
});

// Update the v-model value when chips change
const updateModelValue = () => {
    emit('update:modelValue', chips.value);
};

const inputValue = ref('');

const addChip = () => {
    const value = inputValue.value.trim();
    if (value && !chips.value.includes(value)) {
    chips.value.push(value);
    inputValue.value = '';
    updateModelValue();
    }
};

const removeChip = (chip) => {
    chips.value = chips.value.filter(c => c !== chip);
    updateModelValue();
};

const handleBackspace = (event) => {
    if (inputValue.value === '' && chips.value.length > 0) {
    event.preventDefault();
    removeChip(chips.value[chips.value.length - 1]);
    }
};
</script>

<style scoped>
.chip-input {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 4px;
}

.chips {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.chip {
    background-color: #e0e0e0;
    border-radius: 16px;
    padding: 5px 10px;
    margin: 2px;
    display: flex;
    align-items: center;
}

.remove-chip {
    margin-left: 8px;
    cursor: pointer;
}

input {
    border: none;
    outline: none;
    flex: 1;
}
</style>
