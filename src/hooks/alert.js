import { ref } from 'vue';

export default function (visibility = false) {
  const alertIsVisible = ref(visibility);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}
