<script setup lang="ts">
import { closeModal, switchToHistory } from '@/assets/scripts/modal';
import { logout } from '@/assets/scripts/auth';
import { user } from '@/assets/scripts/auth';
import { formatDate } from '@/assets/scripts/dateFormatter';
</script>
<template>
    <div class="profile-modal">
        <div class="close-zone-modal">
            <div @click="closeModal">X</div>
        </div>

        <div class="profile-header">
            <img src="../../assets/Images/avatar.png" class="avatar-placeholder">
            <div class="username-placeholder">{{ user?.email }} ({{ user?.role }})</div>
        </div>

        <div class="profile-info-lines">
          <div class="info-line">{{ user?.fullName }}</div>
          <div class="info-line">{{ user?.phone }}</div>
          <div class="info-line">{{ formatDate(user?.createdAt) }}</div>
        </div>

        <div class="profile-actions">
          <button class="btn btn-secondary" @click="switchToHistory">История покупок</button>
          <button class="btn btn-primary" @click="logout">Выйти</button>
        </div>
  </div>
</template>
<style scoped>
.profile-modal {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 10% auto auto auto;

  background-color: var(--bg-color);
  width: 80%;
  height: 80%;
  box-sizing: border-box;
}

.profile-modal .close-zone-modal {
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  border-bottom: 2px solid var(--border-strong);
} 

.profile-modal .close-zone-modal div {
  background-color: var(--btn-danger-bg);
  width: 3%;
  height: 60%;
  margin: 5px 15px 5px 5px; 
  color: var(--text-on-accent);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: var(--btn-radius);
  transition: all var(--transition-base);
  cursor: pointer;
}

.profile-modal .profile-header {
  grid-column: 1;
  grid-row: 2;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 30px 20px;
  box-sizing: border-box;
}

.profile-modal .profile-actions {
  grid-column: 2;
  grid-row: 4;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: auto;
  padding: 30px 20px;
  width: 500px;
  box-sizing: border-box;
}

.profile-modal .profile-info-lines {
  grid-column: 1 / -1;
  grid-row: 3;
  
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px;
  box-sizing: border-box;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid var(--border-strong);
}

.username-placeholder {
  width: 80%;
  height: 36px;
  border: 1px solid var(--border-strong);
  border-radius: var(--btn-radius);
  padding: 5px;
  font-size: 22px;
}

.info-line {
  width: 100%;
  height: 40px;
  border: 1px solid var(--border-strong);
  border-radius: var(--btn-radius);
  padding: 5px;
  font-size: 22px;
}

.btn {
  width: 100%;
  padding: 12px;
  font-size: 15px;
  cursor: pointer;
  border-radius: var(--btn-radius);
  border: 1px solid var(--border-strong);
  background-color: var(--btn-secondary-bg);
  transition: all var(--transition-base);
}

.btn-secondary{
    grid-column: 2;
    background: var(--accent-2);
    transition: all 0.2s ease-in-out;
}

.btn-secondary:hover{
  transform: scale(1.05);
}

.btn-secondary:active{
  transform: scale(0.95);
}

.btn-primary {
  background-color: var(--btn-danger-bg);
  transition: all 0.2s ease-in-out;
}

.btn-primary:hover{
  background: var(--btn-danger-bg-hover);
}

.btn-primary:active{
  background: var(--btn-danger-bg-active);
}

.btn:hover{
  transform: scale(1.05);
}

.btn:active{
  transform: scale(0.95);
}
</style>