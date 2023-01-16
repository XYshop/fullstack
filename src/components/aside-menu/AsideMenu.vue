<template>
  <div class="aside-menu">
    <aside class="menu">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li><router-link to="/home/upvote">Dashboard</router-link></li>
        <li><router-link to="/home/calendar">Customers</router-link></li>
      </ul>
      <p class="menu-label">Administration</p>
      <ul class="menu-list">
        <li><router-link to="./b">Team Settings</router-link></li>
        <li>
          <router-link to="./c">Manage Your Team</router-link>
          <ul>
            <li><router-link to="./d">Members</router-link></li>
            <li><router-link to="./e">Plugins</router-link></li>
            <li><router-link to="./f">Add a member</router-link></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li>
          <router-link to="./g">Cloud Storage Environment Settings</router-link>
        </li>
        <li><router-link to="./h">Authentication</router-link></li>
      </ul>
      <p class="menu-label">Transactions</p>
      <ul class="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
    </aside>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.aside-menu {
  height: 100%;
  text-align: left;

  a {
    &.router-link-exact-active {
      color: #fff;
      background-color: #485fc7;
    }
  }
}
</style>
