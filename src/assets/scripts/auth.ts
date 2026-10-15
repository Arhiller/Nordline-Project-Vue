import { useLocalStorage, StorageSerializers } from "@vueuse/core";
import * as Model from "@/assets/models"

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
}