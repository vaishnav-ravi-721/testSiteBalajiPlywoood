  // Define the order of categories
      const categoryOrder = [
        "0.92mm Laminate",
        "1mm Laminate",
        "Fabric Laminate",
        "Acrylic Laminate",
        "Louvers"
      ];

      let currentlyHighlightedCategory = null;

      function displayCatalog() {
        const catalogContainer = document.getElementById("catalogContainer");
        const sidebar = document.getElementById("sidebar");

        if (catalogContainer && sidebar) {
          // Group catalogues by category
          const cataloguesByCategory = catalogData.reduce((acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {});

          // Add categories to sidebar
          categoryOrder.forEach((category) => {
            if (cataloguesByCategory[category]) {
              const categoryHTML = `
                <div class="sidebar-category" data-category="${category.replace(
                  /\s+/g,
                  "-"
                )}">
                  ${category}
                </div>
              `;
              sidebar.insertAdjacentHTML("beforeend", categoryHTML);
            }
          });

          // Display catalogues in the defined category order
          categoryOrder.forEach((category) => {
            if (cataloguesByCategory[category]) {
              // Create category section
              const categoryHTML = `
                <div class="category-section">
                  <h2 class="category-title" id="${category.replace(
                    /\s+/g,
                    "-"
                  )}-title">${category}</h2>
                  <div class="category-items" id="${category.replace(
                    /\s+/g,
                    "-"
                  )}-items"></div>
                </div>
              `;
              catalogContainer.insertAdjacentHTML("beforeend", categoryHTML);

              // Add items to this category
              const categoryContainer = document.getElementById(
                `${category.replace(/\s+/g, "-")}-items`
              );

              cataloguesByCategory[category].forEach((item) => {
                const bookItemHTML = `
                  <div class="book-items" data-category="${category.replace(
                    /\s+/g,
                    "-"
                  )}">
                      <a href="${item.link}" target="_blank">
                          <div class="main-book-wrap">
                              <div class="book-cover">
                                  <div class="book-inside"></div>
                                  <div class="book-image">
                                      <img src="${item.imageSrc}" alt="${
                                        item.altText || "Catalog Cover"
                                      }" />
                                      <div class="effect"></div>
                                      <div class="light"></div>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
                `;
                categoryContainer.insertAdjacentHTML("beforeend", bookItemHTML);
              });
            }
          });
        } else {
          console.error("Catalog container or sidebar not found!");
        }
      }

      // Toggle sidebar
      document
        .getElementById("sidebarToggle")
        .addEventListener("click", function () {
          document.getElementById("sidebar").classList.toggle("open");
        });

      // Highlight category items when sidebar category is clicked
      document.addEventListener("click", function (e) {
        if (e.target.classList.contains("sidebar-category")) {
          const category = e.target.getAttribute("data-category");

          // Check if we're clicking the same category that's already highlighted
          if (currentlyHighlightedCategory === category) {
            // Remove highlight
            document.querySelectorAll(".sidebar-category").forEach((el) => {
              el.classList.remove("active");
            });
            document.querySelectorAll(".book-items").forEach((el) => {
              el.classList.remove("category-highlight");
            });
            currentlyHighlightedCategory = null;
            return;
          }

          // Remove active class from all sidebar categories
          document.querySelectorAll(".sidebar-category").forEach((el) => {
            el.classList.remove("active");
          });

          // Add active class to clicked category
          e.target.classList.add("active");

          // Remove highlight from all items
          document.querySelectorAll(".book-items").forEach((el) => {
            el.classList.remove("category-highlight");
          });

          // Highlight items in selected category
          const items = document.querySelectorAll(
            `.book-items[data-category="${category}"]`
          );
          items.forEach((item) => {
            item.classList.add("category-highlight");
          });

          // Update currently highlighted category
          currentlyHighlightedCategory = category;

          // Scroll to the category title
          const title = document.getElementById(`${category}-title`);
          if (title) {
            title.scrollIntoView({ behavior: "smooth" });
          }

          // Close sidebar on mobile
          if (window.innerWidth <= 780) {
            document.getElementById("sidebar").classList.remove("open");
          }
        }
      });

      // Close sidebar when clicking outside
      document.addEventListener("click", function (e) {
        const sidebar = document.getElementById("sidebar");
        const sidebarToggle = document.getElementById("sidebarToggle");

        if (
          sidebar.classList.contains("open") &&
          !sidebar.contains(e.target) &&
          e.target !== sidebarToggle &&
          !sidebarToggle.contains(e.target)
        ) {
          sidebar.classList.remove("open");
        }
      });

      // Call the function when the DOM is fully loaded
      document.addEventListener("DOMContentLoaded", displayCatalog);
