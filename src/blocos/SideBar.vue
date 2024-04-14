<template>
	<div id="mySidebar" class="sidebar">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
  <VaSidebar width="100%" color="#181824" class="side-menu">
      <VaSidebarItem>
        <VaSidebarItemContent>
          <i class="fa-solid fa-gear"></i>
          <VaSidebarItemTitle>Dashboard</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem>
      <VaAccordion>
        <VaCollapse body-color="#00000022">
          <template #header="{ value: isCollapsed }">
            <VaSidebarItem>
              <VaSidebarItemContent>
                <i class="fa-solid fa-gear"></i>
                <VaSidebarItemTitle>Messages</VaSidebarItemTitle>
                <VaSpacer />
                <VaIcon :name="isCollapsed ? 'va-arrow-up' : 'va-arrow-down'" />
              </VaSidebarItemContent>
            </VaSidebarItem>
          </template>
          <template #body>
            <VaSidebarItem>
              <VaSidebarItemContent>
                <VaIcon name="send" />
                <VaSidebarItemTitle>Send</VaSidebarItemTitle>
              </VaSidebarItemContent>
            </VaSidebarItem>
            <VaSidebarItem>
              <VaSidebarItemContent>
                <VaIcon name="drafts" />
                <VaSidebarItemTitle>Drafts</VaSidebarItemTitle>
              </VaSidebarItemContent>
            </VaSidebarItem>
          </template>
        </VaCollapse>

        <VaSidebarItem active>
          <VaSidebarItemContent>
            <VaIcon name="room" />
            <VaSidebarItemTitle>Address book</VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
      </VaAccordion>

      <VaSpacer />

      <VaSidebarItem>
        <VaSidebarItemContent>
          <VaIcon name="settings" />
          <VaSidebarItemTitle>Settings</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem>
    </VaSidebar>
</div>
</template>

<script setup>


  
</script>

<style scoped>

	.nav{margin-bottom: 8px;}

	.va-sidebar__item__content{
		display: flex;
    align-items: center;
    padding: 5px 10px;
    min-height: 40px;
    box-sizing: border-box;
	}

</style>
