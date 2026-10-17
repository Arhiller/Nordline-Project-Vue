import { useLocalStorage, StorageSerializers } from "@vueuse/core";
import * as Model from "@/assets/models"
import router from "@/router";
import { closeModal } from "./modal";

export const token = useLocalStorage<string | null>('token', null);
export const role = useLocalStorage<string | null>('role', null);
export const user = useLocalStorage<Model.Users | null>(
  'user', 
  null, 
  { serializer: StorageSerializers.object }
);

export function logout() {
  token.value = null;
  role.value = null;
  user.value = null
  closeModal()
  router.replace('/')
}