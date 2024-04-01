<template>
	<nav class="sidebar sidebar-offcanvas" id="sidebar">
		<ul class="nav">
			<li class="nav-item nav-profile">
				<a href="#" class="nav-link">
					<div class="profile-image">
						<VaAvatar src="assets/painel/images/faces/face8.jpg" class="mr-6" />
						<div class="dot-indicator bg-success"></div>
					</div>
					<div class="text-wrapper">
						<p class="profile-name">Fulano de tal</p>
						<p class="designation">Administrator</p>
					</div>
						<div class="icon-container">
						<i class="icon-bubbles"></i>
						<div class="dot-indicator bg-danger"></div>
					</div>
				</a>
			</li>
		</ul>
		<!---sidbar-->

		<div>
    <VaSidebar width="100%" color="#181824">
      <VaSidebarItem>
        <VaSidebarItemContent>
          <VaIcon name="dashboard" />
          <VaSidebarItemTitle>Dashboard</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem>
      <VaAccordion>
        <VaCollapse body-color="#00000022">
          <template #header="{ value: isCollapsed }">
            <VaSidebarItem>
              <VaSidebarItemContent>
                <VaIcon name="mail" />
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

		<!---/sidbar-->
	</nav>
</template>

<script setup>


  
</script>

<style scoped>

	.nav{margin-bottom: 8px;}

	.va-sidebar__item__content{
		display: flex;
    align-items: center;
    padding: 10px;
    min-height: 46px;
    box-sizing: border-box;
	}

</style>
