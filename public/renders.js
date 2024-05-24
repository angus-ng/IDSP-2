function displayLoginPage() {
  pageContent.innerHTML = `
    <div id="loginPage" class="flex flex-col items-center rounded-lg w-full z-10">
      <div class="flex-shrink-0 mt-2 mb-6">
          <img src="/lightmode/logo_with_wordmark.svg" alt="Logo with Wordmark"/>  
      </div>
      <div class="flex-1">
        <form>
          <div class="flex items-center mt-6 mb-6">
              <label for="emailInput" class=""></label>
              <input type="text" placeholder="Phone number, email, or username" id="emailInput" name="emailInput" class="rounded-input-box w-input-box border-dark-grey border-2 text-17 items-end">
          </div>
          <div class="flex items-center mt-4 mb-6">
              <label for="password" class=""></label>
              <input type="password" placeholder="Password" id="passwordInput" name="password" class="rounded-input-box w-input-box text-17 border-dark-grey border-2 items-end">
          </div>
        </form>
          <div class="flex items-center mt-4 mb-6">
              <div class="grid grid-cols-2 w-full">
                  <div class="col-start-0">
                      <input type="checkbox" name="rememberMe" id="rememberMe" class="size-5">
                      <label for="rememberMe" class="ml-2 text-secondary">Remember Me</label>
                  </div>
                  <div class="justify-self-end">
                      <a class="text-secondary leading-secondary text-light-mode-accent text-decoration-line: underline cursor-pointer">Forgot Password?</a>
                  </div>
              </div>
          </div>
              <button id="localAuth" class="my-2 w-full">
                  <img src="/lightmode/login_button.svg" alt="Login Button"/>
              </button>
          </div>
          <div id="divider" class="my-6">
              <img src="/lightmode/orDivider.svg" alt="Divider"/>
          </div>
          <div class="flex items-center justify-between mt-4">
              <div class="flex flex-row space-x-4">
                  <form action="/auth/login">
                      <button>
                          <img src="/lightmode/google_icon.svg" alt="Google Icon"/>
                      </button>
                  </form>
                  <form action="/auth/login">
                      <button>
                          <img src="/lightmode/apple_icon.svg" alt="Apple Icon"/>
                      </button>
                  </form>
                  <form action="/auth/login">
                      <button id="facebookAuth">
                          <img src="/lightmode/facebook_icon.svg" alt="Facebook Icon"/>
                      </button>
                  </form>
              </div>
          </div>
      <div class="flex items-center justify-between mt-6 gap-1">
          <p class="text-secondary leading-secondary">Don't have an account?</p>
          <a id="signUp" class="text-secondary leading-secondary text-light-mode-accent text-decoration-line: underline cursor-pointer">Sign up</a>
      </div>
    </div>
  </div>`;
}

async function displayCreateCircle() {
  nav.classList.add("hidden");
  pageName.textContent = `New Circle`;

  const fromCreateAlbum = rightButtonSpan.getAttribute("fromCreateAlbum");
  if (fromCreateAlbum === "true") {
    leftHeaderButton.innerHTML = `<img id="albumConfirmationBackButton" src="/lightmode/back_button.svg" alt="Back Button"/>`;
  } else {
    leftHeaderButton.innerHTML = `<img id="backButton" src="/lightmode/back_button.svg" alt="Back Button"/>`;
  }

  rightHeaderButton.innerHTML = `<img id="nextInviteFriends" src="/lightmode/next_button.svg" alt="Next Button"/>`;

  const pageContent = document.querySelector("#pageContent");
  pageContent.innerHTML = `
    <div id="createNewCircle" class="flex flex-col justify-center items-center p-4 bg-light-mode rounded-lg w-full overflow-hidden">
        <div class="shrink-0 mt-14 mb-6 justify-center">
            <img id="circleImage" src="/placeholder_image.svg" alt="Placeholder Image" class="object-cover w-234 h-230 rounded-full cursor-pointer"/>                     
        </div>
    
        <div class="flex-1 flex flex-col justify-between w-full px-4">
          <div>
            <form class="flex flex-col" onkeydown="return event.key != 'Enter';">
              <div class="flex items-center mt-4 mb-28">
                  <label for="circleName" class="font-medium text-h2 mr-6">Name</label>
                  <input
                  type="text"
                  placeholder="add a title to your circle..."
                  id="circleName"
                  class="w-full bg-transparent text-h2 text-text-grey font-light items-end border-none"
                  required
                  />
              </div>
            </form>
          </div>
          <div class="flex flex-col">
          <div id="divider" class="my-4">
              <img src="/lightmode/divider.svg" alt="Divider"/>                          
          </div>
            <input id="fileUpload" type="file" class="hidden" multiple=false />
            <div class="flex items-center justify-between mt-2 mb-2">
              <div>
                <p class="font-medium text-h2 leading-h2">Private or Public</p>
                <p class="text-14 leading-body">Make new circle private or public</p>
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input id="privacyCheckbox" type="checkbox" value="" class="sr-only peer">
                  <img id="privacyIcon" src="/lightmode/lock_icon.svg" alt="Lock icon" class="mr-4"/>
                  <span id="privacyLabel" class="text-sm font-medium leading-body text-14 mr-4 w-12">Private</span>
                  <div class="peer relative h-5 w-10 rounded-full outline outline-1 outline-black after:absolute after:start-[2px] after:top-0 after:h-4 after:w-4 after:rounded-full after:bg-black after:border after:border-black after:transition-all after:content-[''] peer-checked:bg-cover peer-checked:bg-black border-2 peer-checked:outline-black peer-checked:after:translate-x-5 peer-checked:after:border-white peer-checked:after:border-opacity-80 peer-checked:after:border-2 peer-checked:after:bg-black rtl:peer-checked:after:-translate-x-full"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      <button id="addPicture" class="w-380 h-45 bg-light-mode-accent text-white rounded-input-box fixed bottom-8">Add Picture</button>
    </div>`;

  const circleNameInput = document.querySelector("#circleName");
  circleNameInput.value = newCircleNameInput;
  const addPictureButton = document.querySelector("#addPicture");
  const fileInput = document.querySelector("#fileUpload");
  const circlePhoto = document.querySelector("#circleImage");

  circlePhoto.addEventListener("click", async function (event) {
    event.preventDefault();
    await fileInput.click();
  });

  addPictureButton.addEventListener("click", async function (event) {
    event.preventDefault();
    await fileInput.click();
  });

  fileInput.addEventListener("input", async function (event) {
    event.preventDefault();
    const res = await handleSelectFile();
    if (res) {
      circlePhoto.src = await res.data;
    }

    addPictureButton.textContent = "Change Picture";
    addPictureButton.className = "w-380 h-45 bg-white border-2 border-dark-grey text-dark-grey rounded-input-box fixed bottom-8";
  });

  privacyCheckbox.addEventListener("change", async function () {
    const privacyIcon = document.querySelector("#privacyIcon");
    const privacyLabel = document.querySelector("#privacyLabel");
    privacyIcon.src = "/lightmode/lock_icon.svg";
    privacyLabel.innerHTML = "Private";
    updateCheckbox();
  });
  return;
}

async function displayListOfFriends(friends) {
  let newArr = friends.map((friend) => {
    let displayName = document.createElement("h2");
    let username = document.createElement("h2");
    displayName.className = "font-medium text-14 leading-tertiary";
    username.className = "font-light text-14 text-dark-grey";
    displayName.textContent = friend.displayName ? friend.displayName : friend.username;
    username.textContent = `@${friend.username}`;
    return `
    <div class="flex items-center my-5">
    <div class="flex-none w-58">
      <img class="rounded-full w-58 h-58" src="${friend.profilePicture}" alt="${friend.username}'s profile picture"/>
    </div>
    <div class="ml-8 flex-none w-207">
      ${displayName.outerHTML}
      ${username.outerHTML}
    </div>
    <div class="flex-none w-58">
      <form>
        <input type="checkbox" id="add" name="add" class="cursor-pointer" value="${friend.username}">
      </form>
    </div>
  </div>`;
  });
  return newArr;
}

async function displayInviteFriends(fromCircle=false, circleId="") {
  nav.classList.add("hidden");
  let friends = await getFriends(currentLocalUser);
  if (fromCircle && circleId) {
    const {data, success} = await getCircle(circleId)
    if (data && success) {
      const memberList = data.members.map((userObj) => {
        return userObj.user.username;
      });
      friends = friends.filter((user) => {
        if (!memberList.includes(user.username)) {
          return user;
        }
      });
    }
  }
  const friendsList = await displayListOfFriends(friends);
  pageName.textContent = "Invite Friends";
  leftHeaderButton.innerHTML = `<img src="/lightmode/back_button.svg" alt="Back Button" id="circleBackButton"/>`;
  rightHeaderButton.innerHTML = `<img src="/lightmode/next_button.svg" alt="Next Button" id="nextButton"/>`;
  if (fromCircle && circleId) {
    leftHeaderButton.innerHTML = `<span class="backSpan" circleid="${circleId}">
    <img src="/lightmode/back_button.svg" alt="Back Button" id="albumToCircleButton"/>
    </span>
    `
    rightHeaderButton.innerHTML = `<img src="/lightmode/done_button.svg" alt="Done Button" id="inviteDoneButton"/>`;
  }

  pageContent.innerHTML = `
      <div class="font-light text-11 justify-center text-center text-dark-grey w-full">
        <p>search or add friends to collaborate with in</p>
        <p>your circle</p>
      </div>
      <div id="createNewCircle" class="flex flex-col items-center p-4 bg-light-mode rounded-lg w-full">
        <div class="relative w-full h-9 mt-8">
          <form onkeydown="return event.key != 'Enter';">
            <input class="w-380 px-10 py-2 border-grey border-2 rounded-input-box text-secondary leading-secondary" placeholder="search friends"/>
            <img src="/lightmode/search_icon_grey.svg" alt="search icon" class="absolute left-3 top-search w-25 h-25"/>
          </form>
        </div>
        <div class="shrink-0 mt-10 mb-6 justify-center w-full">
          <h1 class="font-bold text-20 leading-body">Suggested Friends</h1>
          <div id="suggestedFriends"></div>
        </div>
      </div>
      `;
  const suggestedFriends = document.querySelector("#suggestedFriends");

  suggestedFriends.innerHTML = friendsList.join("");
}

function saveCheckedFriends() {
  const addCheckboxes = document.querySelectorAll("#add");
  addCheckboxes.forEach((checkbox) => {
    if (checkbox.checked && !checkedFriends.includes(checkbox.value)) {
      checkedFriends.push(checkbox.value);
    }
  });
}

async function displayCreateCirclePreview() {
  nav.classList.add("hidden");
  leftHeaderButton.innerHTML = `<img src="/lightmode/back_button.svg" alt="Back Button" id="circlePreviewBackButton"/>`;
  pageName.textContent = "New Circle";
  const fromCreateAlbum = rightButtonSpan.getAttribute("fromCreateAlbum");
  const next = document.querySelector("#nextButton");
  next.src = "/lightmode/create_button.svg";
  if (fromCreateAlbum === "true") {
    next.id = "createCircleToAlbum";
  } else {
    next.id = "createCircleButton";
  }


  pageContent.innerHTML = `
    <div id="createNewCircle" class="flex flex-col items-center p-4 bg-light-mode rounded-lg w-full">
          <div class="flex-shrink-0 mt-14 mb-4">
              <img id="circleImage" src="/placeholder_image.svg" alt="Placeholder Image" class="object-cover w-234 h-230 rounded-full cursor-pointer"/>                     
          </div>
          <div class="flex justify-center my-5 relative w-full gap-2">
              <input
                  type="text"
                  placeholder="add a name to your circle"
                  id="circleName"
                  class="bg-transparent text-24 font-bold border-none text-center flex-1 px-0"
              />
              <button id="editButton" class="pl-1">
                  <img src="/lightmode/edit_icon.svg" alt="Edit Icon"/>
              </button>
          </div>
          <div id="divider" class="mb-2">
              <img src="/lightmode/divider.svg" alt="Divider"/>                          
          </div>
          <input id="fileUpload" type="file" class="hidden" multiple=false/>
          <div class="flex items-center justify-between w-full">
              <div>
                  <p class="font-medium text-h2 leading-h2">Private or Public</p>
                  <p class="text-body leading-tertiary text-dark-grey">Make new circle private or public</p>
              </div>
              <div>
                  <label class="inline-flex items-center cursor-pointer">
                  <input id="privacyCheckbox" type="checkbox" value="" class="sr-only peer">
                  <img id="privacyIcon" src="/lightmode/lock_icon.svg" alt="Lock icon" class="mr-4">
                  <span id="privacyLabel" class="text-sm font-medium leading-body text-14 mr-4 w-12">Private</span>
                  <div class="peer relative h-5 w-10 rounded-full outline outline-1 outline-black after:absolute after:start-[2px] after:top-0 after:h-4 after:w-4 after:rounded-full after:border after:border-black after:bg-black after:transition-all after:content-[''] peer-checked:bg-cover peer-checked:bg-black border-2 peer-checked:outline-black peer-checked:after:translate-x-5 peer-checked:after:border-white peer-checked:after:border-opacity-80 peer-checked:after:border-2 peer-checked:after:bg-black rtl:peer-checked:after:-translate-x-full"></div>
                  </label>
              </div>
          </div>
          <div class="flex items-center justify-between w-full hidden">
            <div class="mt-10">
              <p class="font-bold text-26 leading-h2">added friends</p>
            </div>
          </div>
          <div class="flex items-center justify-between w-full hidden">
            <div class="mt-10">
              <p class="text-body leading-tertiary">Most Recent Activity with:</p>
            </div>
          </div>
          </form>
        </div>
    </div>`;

  const editButton = document.querySelector("#editButton");
  const circleNameInput = document.querySelector("#circleName");

  editButton.addEventListener("click", () => {
    circleNameInput.focus();
  });

  const fileInput = document.querySelector("#fileUpload");
  const circlePhoto = document.querySelector("#circleImage");
  document.querySelector("#circleImage").addEventListener("click", async function (event) {
    event.preventDefault();
    await fileInput.click();
  });

  fileInput.addEventListener("input", async function (event) {
    event.preventDefault();
    const res = await handleSelectFile();
    if (res) {
      circlePhoto.src = await res.data;
    }
  });

  privacyCheckbox.addEventListener("change", async function () {
    const privacyIcon = document.querySelector("#privacyIcon");
    const privacyLabel = document.querySelector("#privacyLabel");
    privacyIcon.src = "/lightmode/lock_icon.svg";
    privacyLabel.innerHTML = "Private";
    await updateCheckbox();
  });

  circleNameInput.value = newCircleNameInput;
}

async function displayExplore(userData) {
  const { success, data } = await getAlbumFeed();
  let feedRender = "";
  if (success && data) {
    const { feedData } = await displayFriendAlbums(data);
    if (feedData) {
      feedRender = feedData.join("");
    }
  }

  pageName.textContent = "Explore";
  header.classList.remove("hidden");
  leftHeaderButton.innerHTML = "";
  rightHeaderButton.innerHTML = `<img id="mapButton" class="px-1" src="/lightmode/map_icon.svg" alt="Map Icon"/>`;
  const circleRender = await displayListOfCirclesHorizontally(userData, currentLocalUser);
  pageContent.innerHTML = `
  <div id="explorePage" class="flex flex-col py-2 w-full h-full>
    <div id="circlesFeed">
      <h2 class="font-medium text-17 mb-2">Your Circles</h2>
      <div class="h-[145px]">
        <div id="circleList" class="m-auto flex flex-row gap-4 overflow-x-auto overflow-y-clip h-full">
          ${circleRender.join("")}
        </div>
      </div>
    </div>
    <div id="feed" class="h-full w-full">
      <h2 class="font-medium text-17">Your Feed</h2>
      <div id="albumList" class="w-full m-auto mt-6 mb-6 grid grid-cols-2 gap-4 pb-[200px]">
        ${feedRender}
      </div>
    </div>
  </div>`;
  await displayNavBar();

  async function displayFriendAlbums(data) {
    const albumList = await Promise.all(data.map(async (obj) => {
      let albumName = document.createElement("p");
      albumName.className = "text-white text-shadow shadow-black";
      albumName.textContent = obj.name;
  
      let userDiv = document.createElement("div");
      userDiv.setAttribute("username", obj.owner.displayName ? obj.owner.displayName : obj.owner.username);
      userDiv.className = "userInfo flex flex-row gap-2 bg-white py-4 items-center justify-start";
      let userImage = document.createElement("img");
      userImage.className = "userImage w-8 h-8 rounded-full object-cover flex-none";
      userImage.src = obj.owner.profilePicture;
      userImage.alt = `${obj.owner.username}'s profile picture`;
      userDiv.append(userImage);
      let username = document.createElement("p");
      username.className = "username text-secondary break-words";
      username.textContent = obj.owner.displayName ? obj.owner.displayName : obj.owner.username;
      userDiv.append(username);

      let creationDate = document.createElement("p");
      creationDate.className = "text-secondary text-dark-grey";
      creationDate.textContent = obj.createdAt;
  
      let circleImage = document.createElement("img");
      circleImage.className = "circle w-8 h-8 rounded-full object-cover";
      circleImage.src = obj.circle.picture;
      
      let albumImage = document.createElement("img");
      albumImage.className = "w-176 h-176 rounded-xl object-cover";
      albumImage.src = obj.photos[0].src;
      albumImage.alt = `${obj.name}'s album cover`;
      const userLiked = obj.likes.some(like => like.user.username === currentLocalUser);
      const likedClass = userLiked ? "liked" : "";
      const heartColor = userLiked ? "#FF4646" : "none";
      const heartColorStroke = userLiked ? "#FF4646" : "white";
  
      return `
      <div class="w-full bg-white p-3 rounded-12.75 h-[280px] overflow-hidden">
        <div class="albumCard">
            <div class="w-full h-min relative overflow-hidden album" id="${obj.id}">
            <div>${albumImage.outerHTML}</div>
            <div class="absolute top-0 right-0 m-2 flex items-start justify-end gap-1 p2">${circleImage.outerHTML}</div>
            <div class="m-2 text-secondary font-semibold absolute inset-0 flex items-end justify-start">
                ${albumName.outerHTML}
            </div>
            <div class="absolute inset-0 flex items-end justify-end gap-1 p-2">
                <div class="like cursor-pointer ${likedClass}">
                  <svg width="20" height="19" viewBox="0 0 20 19" fill="${heartColor}" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.22318 16.2905L9.22174 16.2892C6.62708 13.9364 4.55406 12.0515 3.11801 10.2946C1.69296 8.55118 1 7.05624 1 5.5C1 2.96348 2.97109 1 5.5 1C6.9377 1 8.33413 1.67446 9.24117 2.73128L10 3.61543L10.7588 2.73128C11.6659 1.67446 13.0623 1 14.5 1C17.0289 1 19 2.96348 19 5.5C19 7.05624 18.307 8.55118 16.882 10.2946C15.4459 12.0515 13.3729 13.9364 10.7783 16.2892L10.7768 16.2905L10 16.9977L9.22318 16.2905Z" stroke="${heartColorStroke}" stroke-width="2"/>
                  </svg>
                </div>
                <div class="comment cursor-pointer" albumid="${obj.id}">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 19.125C8.79414 19.125 7.12658 18.6192 5.70821 17.6714C4.28983 16.7237 3.18434 15.3767 2.53154 13.8006C1.87873 12.2246 1.70793 10.4904 2.04073 8.81735C2.37352 7.14426 3.19498 5.60744 4.4012 4.40121C5.60743 3.19498 7.14426 2.37353 8.81735 2.04073C10.4904 1.70793 12.2246 1.87874 13.8006 2.53154C15.3767 3.18435 16.7237 4.28984 17.6714 5.70821C18.6192 7.12658 19.125 8.79414 19.125 10.5C19.125 11.926 18.78 13.2705 18.1667 14.455L19.125 19.125L14.455 18.1667C13.2705 18.78 11.925 19.125 10.5 19.125Z" stroke="#F8F4EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
            </div>
          </div>
        </div>
        <div class="h-20">
        ${userDiv.outerHTML}
        ${creationDate.outerHTML}
        </div>
    </div>`;
    }));
    return { feedData: albumList };
  }

  const albumList = document.querySelector("#albumList");
  albumList.addEventListener("click", async(event) => {
    const like = event.target.closest(".like");
    const comment = event.target.closest(".comment");
    const username = event.target.closest(".username");
    const userImage = event.target.closest(".userImage");
    const albumDiv = event.target.closest(".album");

    if (like) {
      const albumId = event.target.closest("div.album").getAttribute("id");
      if (like.classList.contains("liked")) {
        like.classList.remove("liked");
        like.querySelector("svg path").setAttribute("fill", "none");
        like.querySelector("svg path").setAttribute("stroke", "#FFFFFF");
        await likeAlbum(albumId);
      } else {
        like.classList.add("liked");
        like.querySelector("svg path").setAttribute("fill", "#FF4646");
        like.querySelector("svg path").setAttribute("stroke", "#FF4646");
        await likeAlbum(albumId);
      }
      return;
    }

    if (comment) {
      const { data: userData } = await getUser(currentLocalUser);
      await displayComments(albumDiv.id, userData.profilePicture, currentLocalUser);
      return;
    }

    if (albumDiv) {
      if (albumDiv.hasAttribute("id")) {
        let { success, data, error } = await getAlbum(albumDiv.id);
        if (success && data) {
          leftButtonSpan.setAttribute("origin", "fromExplore");
          await displayAlbum(data);
        }
      }
      return;
    }

    if (username || userImage) {
      const user = event.target.closest(".userInfo").getAttribute("username");
      const { data: userData } = await getUser(user);
      leftButtonSpan.setAttribute("origin", "fromFeed");
      await displayProfile(userData);
    }
  })

  const circleList = document.querySelector("#circleList");

  circleList.addEventListener("click", async function (event) {
    const circleDiv = event.target.closest("div.circle");
    if (circleDiv) {
      if (circleDiv.hasAttribute("id")) {
        let { success, data, error } = await getCircle(circleDiv.id);
        if (success && data) {
          leftButtonSpan.setAttribute("origin", "fromExplore");
          await displayCircle(data, userData.username);
        }
      }
    }
  });

  let isDown = false;
  let startX;
  let scrollLeft;

  circleList.addEventListener("mousedown", (e) => {
    isDown = true;
    circleList.classList.add("active");
    startX = e.pageX - circleList.offsetLeft;
    scrollLeft = circleList.scrollLeft;
  });

  circleList.addEventListener("mouseleave", () => {
    isDown = false;
    circleList.classList.remove("active");
  });

  circleList.addEventListener("mouseup", () => {
    isDown = false;
    circleList.classList.remove("active");
  });

  circleList.addEventListener("mousemove", (event) => {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - circleList.offsetLeft;
    const walk = (x - startX) * 1.5;
    circleList.scrollLeft = scrollLeft - walk;
  });
}

async function displaySearch() {
  pageName.textContent = "Search";
  rightHeaderButton.innerHTML = "";
  leftHeaderButton.innerHTML = "";
  pageContent.innerHTML = `
    <div id="searchPage" class="w-full h-full">
      <div class="w-full h-full ml-2 bg-light-mode">
        <div class="fixed mb-6">
          <div class="relative w-full h-12 bg-light-mode">
            <input type="text" id="searchBox" class="w-380 px-10 py-2 mt-2 border-grey border-2 rounded-input-box text-secondary leading-secondary" placeholder="search account">
            <img src="/lightmode/search_icon_grey.svg" alt="search icon" class="absolute left-3 top-3.5 w-25 h-25"/>
          </div>
        </div>
        <div class="flex flex-col shrink-0 justify-center w-380">
          <div id="suggestedFriends" class="flex flex-col mt-20 pb-48"></div>
        </div>
      </div>
    </div>
    `;
  const searchBox = document.querySelector("#searchBox");

  // this is to show all users when the page first loads
  const suggestedFriends = document.querySelector("#suggestedFriends");
  let storedSearchResults = [];

  async function initializeSearch() {
    const initialSearchResult = await getSearchResult(searchBox.value);
    storedSearchResults = initialSearchResult.data;
    
    updateSuggestedFriends(storedSearchResults);
  }

  function updateSuggestedFriends(data) {
    suggestedFriends.innerHTML = displayUserSearch(data).join("");
  }

  await initializeSearch();

  searchBox.addEventListener("input", (event) => {
    const filteredResults = storedSearchResults.filter((user) => {
      if (user.displayName){
        return (user.username.toLowerCase().includes(searchBox.value.toLowerCase()) || user.displayName.toLowerCase().includes(searchBox.value.toLowerCase()))
      }
        return user.username.toLowerCase().includes(searchBox.value.toLowerCase())
    })
    updateSuggestedFriends(filteredResults);
  });

  // Initial load
  suggestedFriends.addEventListener("click", async function (event) {
    event.preventDefault();
    const user = event.target.closest("div.user");
    if (user) {
      const { success, data } = await getUser(user.id);
      if (success && data) {
        return await displayProfile(data);
      }
    }
  });
  suggestedFriends.addEventListener("click", async (event) => {
    event.preventDefault();
    const target = event.target;
    const username = target.getAttribute("name");
    const method = target.getAttribute("method");
    let response;
    switch (method) {
      case "Add Friend":
        response = await sendFriendRequest(username, currentLocalUser);
        await displayPopup("friend request sent");
        await displaySearch();
        break;
      case "Remove Friend":
        response = await unfriend(username, currentLocalUser);
        await displaySearch();
        break;
      case "Remove Request":
        response = await removeFriendRequest(username, currentLocalUser);
        await displaySearch();
        break;
      case "Accept Request":
        response = await acceptFriendRequest(username, currentLocalUser);
        await displaySearch();
        break;
      default:
        break;
    }
  });
}

function displayUserSearch(listOfUsers) {
  if (!listOfUsers) {
    return [];
  }
  
  let newArr = listOfUsers.map((user) => {
    if (user.username === currentLocalUser) {
      return;
    }
    let friendStatus = "Add Friend";
    for (let friend of user.friendOf) {
      if (friend.friend_1_name === currentLocalUser) {
        method = "Remove Friend";
        friendStatus = "Remove Friend";
      }
    }
    for (let request of user.requestReceived) {
      if (request.requester.username === currentLocalUser) {
        friendStatus = "Remove Request";
      }
    }
    for (let request of user.requestsSent) {
      if (request.requestee.username === currentLocalUser) {
        friendStatus = "Accept Request";
      }
    }
    let displayName = document.createElement("h2");
    let username = document.createElement("h2");
    displayName.className = "font-medium text-14 leading-tertiary";
    username.className = "font-light text-14 text-dark-grey";
    displayName.textContent = user.displayName ? user.displayName : user.username;
    username.textContent = `@${user.username}`;
    return `<div class="flex items-center my-3 user cursor-pointer" id="${user.username}">
      <div class="flex-none w-58">
        <img class="rounded-full w-58 h-58 object-cover" src="${user.profilePicture}" alt="${user.username}'s profile picture"/>
      </div>
      <div class="ml-8 flex-none w-207">
        ${displayName.outerHTML}
        ${username.outerHTML}
      </div>
      <div class="ml-auto w-5">
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7.5 7.5L1 14" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>`;
  });
  return newArr;
}

async function displayActivity() {
  pageName.textContent = "All Activity";
  rightHeaderButton.innerHTML = "";
  leftHeaderButton.innerHTML = "";
  const { friendRequests, circleInvites } = await getActivities(
    currentLocalUser
  );
  const noCircleInvites = `<p class="text-secondary text-medium-grey" >No circle invites pending.</p>`;
  const circleInvitePreviews = [];
  for (i = 0; i < circleInvites.length; i++) {
    if (i > 3) {
      const count = circleInvites.length - 4;
      const andMore = `
      <div class="w-8 h-8 rounded-full border-2 border-white border-solid ml-neg12 flex justify-center items-center bg-dark-grey">
        <p class="text-secondary text-white font-bold">+${count}</p>
      </div>`;
      circleInvitePreviews.push(andMore);
      break;
    }
    const circleImg = document.createElement("img");
    circleImg.src = circleInvites[i].circle.picture;
    circleImg.alt = `${circleInvites[i].circle.name}'s picture`;
    circleImg.className = "w-8 h-8 rounded-full object-cover border-2 border-white border-solid";
    i > 0 ? circleImg.classList.add("ml-neg12") : null;
    circleInvitePreviews.push(circleImg.outerHTML);
  }

  const noFriendRequests = `<p class="text-secondary text-medium-grey" >No friend requests pending.</p>`;
  const friendRequestsPreviews = [];
  for (i = 0; i < friendRequests.length; i++) {
    if (i > 3) {
      const count = friendRequests.length - 4;
      const andMore = `<div class="w-8 h-8 rounded-full border-2 border-white border-solid ml-neg12 flex justify-center items-center bg-dark-grey">
        <p class="text-secondary text-white font-bold">+${count}</p>
      </div>`;
      friendRequestsPreviews.push(andMore);
      break;
    }
    const friendImg = document.createElement("img");
    friendImg.src = friendRequests[i].requester.profilePicture;
    let altText = friendRequests[i].requester.displayName ? friendRequests[i].requester.displayName : friendRequests[i].requester.username;
    altText = altText + "'s profile picture";
    friendImg.alt = altText;
    friendImg.className = "w-8 h-8 rounded-full object-cover border-2 border-white border-solid";i > 0 ? friendImg.classList.add("ml-neg12") : null;
    friendRequestsPreviews.push(friendImg.outerHTML);
  }

  pageContent.innerHTML = `
    <div id="activityPage" class="flex-non flex-col py-2 w-full h-full">
        <div id="circleInviteSection" class="h-100 border-solid border border-y-black border-x-transparent w-full flex items-center flex-wrap flex-row justify-between space-y-0">
            <div class="w-full">
                <h2 class="font-medium text-base">Circle Invites</h2>
            </div>
            <div id="circleInvites" class="flex w-full">
                <div class="flex w-180 h-33 items-center">
                    ${circleInvites.length ? circleInvitePreviews.join("") : noCircleInvites}
                </div>
                <div class="flex w-2 h-33 items-center ml-auto">
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7.5 7.5L1 14" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div id="friendInviteSection" class="h-100 border-solid border border-t-transparent border-b-black border-x-transparent w-full flex items-center flex-wrap flex-row space-y-0">
            <div class="w-full">
                <h2 class="font-medium text-base">Friend Requests</h2>
            </div>
            <div id="friendRequests" class="flex w-full">
              <div class="flex w-180 h-33 items-center">
                  ${friendRequests.length ? friendRequestsPreviews.join("") : noFriendRequests}
              </div>
              <div class="flex w-2 h-33 items-center ml-auto">
                  <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7.5 7.5L1 14" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </div>
            </div>
        </div>
    </div>`;

  const activityPage = document.querySelector("#activityPage");

  activityPage.addEventListener("click", async (event) => {
    const circleInvitesDiv = event.target.closest("#circleInvites");
    const friendRequestsDiv = event.target.closest("#friendRequests");
    event.preventDefault();

    if (circleInvitesDiv) {
      if (circleInvites.length) {
        await displayCircleInvites();
      }
    }

    if (friendRequestsDiv) {
      if (friendRequests.length) {
        await displayFriendRequests();
      }
    }
  });
}

async function displayNavBar() {
  const nav = document.querySelector("#nav");
  nav.classList.remove("hidden");
  nav.innerHTML = `
  <div class="border-b border-dark-grey"></div>
      <footer class="w-full flex justify-between items-center pt-4 pb-5 px-6 bg-light-mode-bg text-grey text-13">
          <a id="explore" class="flex flex-col items-center cursor-pointer">        
              <img src="/lightmode/explore_icon.svg" alt="Explore Icon">
              <p class="mt-1">explore</p>
          </a>
          <a id="search" class="flex flex-col items-center cursor-pointer">
              <img src="/lightmode/search_icon.svg" alt="Search Icon">
              <p class="mt-1">search</p>
          </a>
          <a id="new" class="flex flex-col items-center cursor-pointer">
              <img src="/lightmode/new_icon.svg" alt="New Icon">
              <p class="mt-1">new</p>
          </a>
          <a id="activity" class="flex flex-col items-center cursor-pointer">
              <img src="/lightmode/activity_icon.svg" alt="Activity Icon">
              <p class="mt-1">activity</p>         
          </a>
          <a id="profile" class="flex flex-col items-center cursor-pointer">
              <img src="/lightmode/profile_icon.svg" alt="Profile Icon">
              <p class="mt-1">profile</p>
          </a>
      </footer>`;

  const navBar = document.querySelector("footer");
  navBar.addEventListener("click", async function (event) {
    event.preventDefault();
    const exploreButton = event.target.closest("#explore");
    const searchButton = event.target.closest("#search");
    const newButton = event.target.closest("#new");
    const activityButton = event.target.closest("#activity");
    const profileButton = event.target.closest("#profile");

    clearNewAlbum();

    if (exploreButton) {
      const { data } = await getUser(currentLocalUser);
      await displayExplore(data);
      pageName.setAttribute("page", "explore");
      newCircleNameInput = "";
      pageName.classList.remove("text-light-mode-accent");
    }
    if (searchButton) {
      await displaySearch();
      pageName.setAttribute("page", "search");
      newCircleNameInput = "";
      pageName.classList.remove("text-light-mode-accent");
    }
    if (newButton) {
      newCircleNameInput = "";
      await displayNewModal();
      pageName.setAttribute("page", "new");
      pageName.classList.remove("text-light-mode-accent");
    }
    if (activityButton) {
      await displayActivity();
      newCircleNameInput = "";
      pageName.setAttribute("page", "activity");
      pageName.classList.remove("text-light-mode-accent");
    }
    if (profileButton) {
      rightHeaderButton.innerHTML = "";
      newCircleNameInput = "";
      pageName.classList.remove("text-light-mode-accent");
      const { success, data } = await getUser(currentLocalUser);
      if (success && data) {
        pageName.setAttribute("page", "profile");
        return await displayProfile(data);
      }
    }
  });
}

async function displayNewModal() {
  const modal = document.querySelector("#modal");
  modal.classList.remove("hidden");
  modal.classList.add("shown");
  const closeModalButton = document.querySelector("#closeModalButton");
  closeModalButton.classList.remove("hidden");
  const modalContent = document.querySelector("#modalContent");
  modalContent.innerHTML = `
  <div class="flex flex-row gap-6 justify-center text-light-mode-accent font-medium text-14 text-center">
    <button id="createAlbumModalButton" class="ml-1 flex-col">
        <img src="/lightmode/create_album_icon.svg" alt="New Album Icon">
        <p class="mt-3 text-center">create album</p>
    </button>
    <button id="createCircleModalButton" class="ml-1 flex-col">
        <img src="/lightmode/create_circle_icon.svg" alt="New Circle Icon">
        <p class="mt-3 text-center">create circle</p>
    </button>                        
  </div>`;
}

async function displayProfile(userData) {
  nav.classList.remove("hidden");
  const user = userData.username;
  const circleRender = await displayListOfCircles(userData, user);
  const albumRender = await displayListOfAlbums(userData, user, true);
  const backSpan = document.createElement("span");
  backSpan.className = "backSpan";
  const imgElement = document.createElement("img");
  imgElement.src = "/lightmode/back_button.svg";
  imgElement.alt = "Back Button";
  imgElement.id = "profileBackButton";
  backSpan.removeAttribute("circleId");

  if (leftButtonSpan.getAttribute("origin") === "fromFeed") {
    imgElement.id = "backToExplore"
  }

  if (currentLocalUser === userData.username) {
    imgElement.classList.add("hidden");
  }

  backSpan.appendChild(imgElement);

  leftHeaderButton.innerHTML = "";
  leftHeaderButton.appendChild(backSpan);

  backSpan.setAttribute("username", `${user}`);

  pageName.textContent = userData.displayName ? userData.displayName : userData.username;
  const username = document.createElement("h2");
  username.id = "username";
  username.className = "text-base text-center";
  username.textContent = `@${userData.username}`;

  const friendText = userData._count.friends === 1 ? "Friend" : "Friends";

  pageContent.innerHTML = `
  <div id="profilePage" class="relative pt-2 pb-16 mb-4 w-full">
    ${currentLocalUser === userData.username ? `<div id="settings" class="absolute top-0 right-0 w-6 h-6 cursor-pointer"><img src="/lightmode/settings_icon.svg"></div>` : ""}
    <div class="flex justify-center mb-4">
      <img id="profilePicture" src="${userData.profilePicture}" class="w-110 h-110 object-cover rounded-full"/>
    </div>
    <div class="flex justify-center mt-2">
      ${username.outerHTML}
    </div>
    <div class="w-180 mt-6 mb-6 m-auto grid grid-cols-2 gap-4">
      <div class="gap-0 justify-center">
        <div id="circles">
          <h2 class="text-base font-bold text-center">${userData._count.UserCircle}</h2>
          <h2 class="text-secondary text-center">Circles</h2>
        </div>
      </div>
      <div class="gap-0 justify-center">
        <div id="friends" class="cursor-pointer">
          <h2 class="text-base font-bold text-center" id="friendCounter">${userData._count.friends}</h2>
          <h2 class="text-secondary text-center">${friendText}</h2>
        </div>
      </div>
    </div>
    <div id="addAsFriend" class="flex justify-center">

    </div>
    <div id="profileTabs" class="w-full justify-center mx-auto">
      <ul class="flex flex-row w-full justify-center -mb-px text-sm font-medium text-center text-dark-grey gap-6">
        <li id="albumTab" class="me-2 w-full mr-0">
          <a class="w-full inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg hover:text-black hover:border-black">
            <p class="text-13 font-bold mr-2">albums</p>
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="hover:fill-black">
              <path d="M11.55 0H2.45C1.93283 0 1.43684 0.205446 1.07114 0.571142C0.705446 0.936838 0.5 1.43283 0.5 1.95V11.05C0.5 11.5672 0.705446 12.0632 1.07114 12.4289C1.43684 12.7946 1.93283 13 2.45 13H11.55C11.6569 12.9985 11.7635 12.9876 11.8685 12.9675L12.0635 12.922H12.109H12.1415L12.382 12.831L12.4665 12.7855C12.5315 12.7465 12.603 12.714 12.668 12.6685C12.7548 12.6046 12.8373 12.5352 12.915 12.4605L12.9605 12.402C13.0243 12.3373 13.083 12.2678 13.136 12.194L13.1945 12.1095C13.2399 12.0371 13.279 11.961 13.3115 11.882C13.3293 11.8508 13.3446 11.8182 13.357 11.7845C13.3895 11.7065 13.409 11.622 13.435 11.5375V11.44C13.4719 11.313 13.4937 11.1821 13.5 11.05V1.95C13.5 1.43283 13.2946 0.936838 12.9289 0.571142C12.5632 0.205446 12.0672 0 11.55 0ZM2.45 11.7C2.27761 11.7 2.11228 11.6315 1.99038 11.5096C1.86848 11.3877 1.8 11.2224 1.8 11.05V8.2485L3.9385 6.1035C3.99893 6.04258 4.07082 5.99422 4.15002 5.96122C4.22923 5.92822 4.31419 5.91123 4.4 5.91123C4.48581 5.91123 4.57077 5.92822 4.64997 5.96122C4.72918 5.99422 4.80107 6.04258 4.8615 6.1035L10.4515 11.7H2.45ZM12.2 11.05C12.1994 11.1301 12.184 11.2095 12.1545 11.284C12.1396 11.3157 12.1223 11.3461 12.1025 11.375C12.0851 11.4025 12.0655 11.4286 12.044 11.453L8.5665 7.9755L9.1385 7.4035C9.19893 7.34258 9.27082 7.29422 9.35003 7.26122C9.42923 7.22822 9.51419 7.21123 9.6 7.21123C9.68581 7.21123 9.77077 7.22822 9.84997 7.26122C9.92918 7.29422 10.0011 7.34258 10.0615 7.4035L12.2 9.5485V11.05ZM12.2 7.709L10.978 6.5C10.606 6.14704 10.1128 5.95028 9.6 5.95028C9.08722 5.95028 8.59398 6.14704 8.222 6.5L7.65 7.072L5.778 5.2C5.40602 4.84704 4.91278 4.65028 4.4 4.65028C3.88722 4.65028 3.39398 4.84704 3.022 5.2L1.8 6.409V1.95C1.8 1.77761 1.86848 1.61228 1.99038 1.49038C2.11228 1.36848 2.27761 1.3 2.45 1.3H11.55C11.7224 1.3 11.8877 1.36848 12.0096 1.49038C12.1315 1.61228 12.2 1.77761 12.2 1.95V7.709ZM7.975 2.6C7.78216 2.6 7.59366 2.65718 7.43332 2.76432C7.27298 2.87145 7.14801 3.02373 7.07422 3.20188C7.00042 3.38004 6.98111 3.57608 7.01873 3.76521C7.05635 3.95434 7.14921 4.12807 7.28557 4.26443C7.42193 4.40079 7.59565 4.49365 7.78479 4.53127C7.97392 4.56889 8.16996 4.54958 8.34812 4.47578C8.52627 4.40199 8.67855 4.27702 8.78568 4.11668C8.89282 3.95634 8.95 3.76784 8.95 3.575C8.95 3.31641 8.84728 3.06842 8.66443 2.88557C8.48158 2.70272 8.23359 2.6 7.975 2.6Z" fill="#737373"/>
            </svg>
          </a>
        </li>
        <li id="circleTab" class="me-2 w-full mr-0">
          <a class="w-full inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg text-black border-black hover:text-black hover:border-black">
            <p id="circleText" class="text-13 font-bold mr-2">circles</p>
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13C6.10083 13 5.25583 12.8293 4.465 12.4878C3.67417 12.1463 2.98625 11.6833 2.40125 11.0987C1.81625 10.5142 1.35323 9.82626 1.0122 9.035C0.671167 8.24373 0.500434 7.39873 0.500001 6.5C0.499567 5.60126 0.670301 4.75627 1.0122 3.965C1.3541 3.17373 1.81712 2.48582 2.40125 1.90125C2.98538 1.31668 3.6733 0.853666 4.465 0.5122C5.2567 0.170733 6.1017 0 7 0C7.8983 0 8.74329 0.170733 9.53499 0.5122C10.3267 0.853666 11.0146 1.31668 11.5987 1.90125C12.1829 2.48582 12.6461 3.17373 12.9884 3.965C13.3308 4.75627 13.5013 5.60126 13.5 6.5C13.4987 7.39873 13.328 8.24373 12.9878 9.035C12.6476 9.82626 12.1846 10.5142 11.5987 11.0987C11.0129 11.6833 10.325 12.1465 9.53499 12.4884C8.74503 12.8303 7.90003 13.0009 7 13ZM7 11.7C8.45166 11.7 9.68124 11.1962 10.6887 10.1887C11.6962 9.18125 12.2 7.95166 12.2 6.5C12.2 5.04833 11.6962 3.81875 10.6887 2.81125C9.68124 1.80375 8.45166 1.3 7 1.3C5.54833 1.3 4.31875 1.80375 3.31125 2.81125C2.30375 3.81875 1.8 5.04833 1.8 6.5C1.8 7.95166 2.30375 9.18125 3.31125 10.1887C4.31875 11.1962 5.54833 11.7 7 11.7Z" fill="#0E0E0E"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <div id="albumList" class="m-auto mt-6 mb-6 columns-2 gap-4 space-y-4 grid-flow-row hidden">
      ${albumRender.join("")}
    </div>
    <div id="circleList" class="m-auto grid grid-cols-3 gap-4 mt-6 mb-6 place-items-center">
      ${circleRender.join("")}
    </div>
    <div class="h-100"></div>
  </div>`;

  const addAsFriend = document.querySelector("#addAsFriend");
  currentLocalUser === userData.username
    ? null
    : (addAsFriend.innerHTML = `<button id="addFriendButton" class="w-auto h-38 rounded-input-box text-white text-secondary px-4">Add Friend</button>`);
  if (currentLocalUser !== userData.username) {
    const addButton = addAsFriend.querySelector("#addFriendButton");
    addButton.setAttribute("method", "Add Friend");
    addButton.setAttribute("name", `${userData.username}`);

    let isFriend = false;

    for (let friend of userData.friendOf) {
      if (friend.friend_1_name === currentLocalUser) {
        addButton.setAttribute("method", "Remove Friend");
        addButton.textContent = "Friend";
        isFriend = true;
      }
    }
    for (let request of userData.requestReceived) {
      if (request.requester.username === currentLocalUser) {
        addButton.setAttribute("method", "Remove Request");
        addButton.textContent = "Requested";
      }
    }
    for (let request of userData.requestsSent) {
      if (request.requestee.username === currentLocalUser) {
        addButton.setAttribute("method", "Accept Request");
        addButton.textContent = "Accept Friend";
      }
    }

    switch (addButton.getAttribute("method")) {
      case "Remove Request":
        addButton.classList.add("bg-dark-grey");
        break;
      default:
        addButton.classList.add("bg-light-mode-accent");
        break;
    }

    if (isFriend) {
      addButton.addEventListener("mouseenter", () => {
        addButton.textContent = "Unfriend";
        addButton.classList.remove("bg-light-mode-accent");
        addButton.classList.add("bg-dark-grey");
      });

      addButton.addEventListener("mouseout", () => {
        addButton.textContent = "Friend";
        addButton.classList.remove("bg-dark-grey");
        addButton.classList.add("bg-light-mode-accent");
      });
    }
  }

  const profilePage = document.querySelector("#profilePage");
  profilePage.addEventListener("click", async (event) => {
    const albumTab = event.target.closest("#albumTab");
    const circleTab = event.target.closest("#circleTab");
    const albumTabLink = document.querySelector("#albumTab a");
    const circleTabLink = document.querySelector("#circleTab a");
    const circleList = document.querySelector("#circleList");
    const albumList = document.querySelector("#albumList");
    const settings = event.target.closest("#settings");
    const friends = event.target.closest("#friends");
    const albumDiv = event.target.closest(".album");
    const like = event.target.closest(".like");
    const comment = event.target.closest(".comment");

    if (like) {
      const albumId = event.target.closest("div.album").getAttribute("id");
      if (like.classList.contains("liked")) {
        like.classList.remove("liked");
        like.querySelector("svg path").setAttribute("fill", "none");
        like.querySelector("svg path").setAttribute("stroke", "#FFFFFF");
        await likeAlbum(albumId);
      } else {
        like.classList.add("liked");
        like.querySelector("svg path").setAttribute("fill", "#FF4646");
        like.querySelector("svg path").setAttribute("stroke", "#FF4646");
        await likeAlbum(albumId);
      }
      return;
    }

    if (comment) {
      await displayComments(albumDiv.id, userData.profilePicture, currentLocalUser);
      return;
    }

    if (albumDiv) {
      const user = document.querySelector("span.user").getAttribute("username");

      if (user) {
        if (albumDiv.hasAttribute("id")) {
          let { success, data, error } = await getAlbum(albumDiv.id);
          if (success && data) {
            await displayAlbum(data);
          }
        }
      }

    }

    if (albumTab) {
      if (albumList.classList.contains("hidden")) {
        albumList.classList.remove("hidden");
        circleList.classList.add("hidden");
      }

      albumTabLink.querySelector("svg path").setAttribute("fill", "black");
      albumTabLink.classList.add("text-black");
      albumTabLink.classList.add("border-black");
      circleTabLink.querySelector("svg path").setAttribute("fill", "#737373");
      circleTabLink.classList.remove("border-black");
      circleTabLink.classList.remove("text-black");
    }

    if (circleTab) {
      if (circleList.classList.contains("hidden")) {
        circleList.classList.remove("hidden");
        albumList.classList.add("hidden");
      }

      circleTabLink.classList.add("text-black");
      circleTabLink.classList.add("border-black");
      albumTabLink.classList.remove("text-black");
      albumTabLink.classList.remove("border-black");
      circleTabLink.querySelector("svg path").setAttribute("fill", "black");
      albumTabLink.querySelector("svg path").setAttribute("fill", "#737373");
    }

    if (friends) {
      await displayFriends(userData.username);
    }

    if (settings) {
      await displaySettings();
    }
  });

  document.querySelector("#circleList").addEventListener("click", async function (event) {
    const circleDiv = event.target.closest("div.circle");
    if (circleDiv) {
      if (circleDiv.hasAttribute("id")) {
        let { success, data, error } = await getCircle(circleDiv.id);
        if (success && data) {
          await displayCircle(data, userData.username);
        }
      }
    }
  });

  const addFriendButton = document.querySelector("#addFriendButton");
  if (addFriendButton) {
    addFriendButton.addEventListener("click", async (event) => {
      event.preventDefault();
      const target = event.target;
      const username = target.getAttribute("name");
      const method = target.getAttribute("method");
      let response;
      switch (method) {
        case "Add Friend": {
          response = await sendFriendRequest(username, currentLocalUser);
          await displayPopup("friend request sent");
          let { success, data } = await getUser(username);
          if (success && data) {
            await displayProfile(data);
          }
          break;
        }
        case "Remove Friend": {
          response = await unfriend(username, currentLocalUser);
          let { success, data } = await getUser(username);
          if (success && data) {
            await displayProfile(data);
          }
          break;
        }
        case "Remove Request": {
          response = await removeFriendRequest(username, currentLocalUser);
          let { success, data } = await getUser(username);
          if (success && data) {
            await displayProfile(data);
          }
          break;
        }
        case "Accept Request": {
          response = await acceptFriendRequest(username, currentLocalUser);
          let { success, data } = await getUser(username);
          if (success && data) {
            await displayProfile(data);
          }
          break;
        }
        default:
          break;
      }
    });
  }
  await cleanUpSectionEventListener();

  async function displaySettings() {
    pageName.textContent = "Settings";
    leftHeaderButton.innerHTML = `<img src="/lightmode/back_button.svg" alt="Back Button" id="settingsBackButton"/>`;
    rightHeaderButton.innerHTML = "";

    pageContent.innerHTML = `
    <div id="settingsPage" class="flex flex-col pt-2 pb-200 mb-4 w-full">
      <div class="flex justify-center mb-4">
        <img id="profilePicture" src="${userData.profilePicture}" class="w-110 h-110 object-cover rounded-full"/>
      </div>
      <div class="flex justify-center mt-2">
        ${username.outerHTML}
      </div>
      <div id="albumSettings" class="w-full mt-6">
        <h2 class="text-light-mode-accent text-secondary mb-3.5">Albums</h2>
        <div class="flex flex-col bg-settings-bg rounded-13">
          <div id="privacySettings" class="flex flex-row items-center justify-between w-full p-3.5">
            <div class="flex flex-row items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7719 17.614V14.1053M16.1579 9.7193V6.38596C16.1579 5.22273 15.6958 4.10715 14.8733 3.28462C14.0507 2.46209 12.9352 2 11.7719 2C10.6087 2 9.49311 2.46209 8.67058 3.28462C7.84806 4.10715 7.38596 5.22273 7.38596 6.38596V9.7193M3 20.2456V11.4737C3 11.0084 3.18484 10.5622 3.51385 10.2331C3.84286 9.90413 4.28909 9.7193 4.75439 9.7193H11.7719H18.7895C19.2548 9.7193 19.701 9.90413 20.03 10.2331C20.359 10.5622 20.5439 11.0084 20.5439 11.4737V20.2456C20.5439 20.7109 20.359 21.1571 20.03 21.4862C19.701 21.8152 19.2548 22 18.7895 22H4.75439C4.28909 22 3.84286 21.8152 3.51385 21.4862C3.18484 21.1571 3 20.7109 3 20.2456Z" stroke="#67696B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p class="text-17">Privacy</p>
            </div>
            <div class="flex flex-row py-0">
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L8 8L1.5 14.5" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div id="notificationSettings" class="flex flex-row items-center justify-between w-full p-3.5">
            <div class="flex flex-row items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.04039 9.36922C5.04039 7.41478 5.81679 5.54039 7.19879 4.15839C8.58078 2.7764 10.4552 2 12.4096 2C14.364 2 16.2384 2.7764 17.6204 4.15839C19.0024 5.54039 19.7788 7.41478 19.7788 9.36922V13.3318L21.6969 17.168C21.7852 17.3445 21.8269 17.5407 21.8181 17.7379C21.8092 17.9352 21.75 18.1268 21.6462 18.2948C21.5425 18.4627 21.3975 18.6013 21.225 18.6974C21.0526 18.7935 20.8584 18.844 20.661 18.8439H16.4879C16.2538 19.7474 15.7262 20.5476 14.9881 21.1188C14.2499 21.6901 13.343 22 12.4096 22C11.4762 22 10.5693 21.6901 9.83116 21.1188C9.09301 20.5476 8.56544 19.7474 8.33127 18.8439H4.15819C3.96078 18.844 3.76663 18.7935 3.5942 18.6974C3.42177 18.6013 3.27677 18.4627 3.17297 18.2948C3.06918 18.1268 3.01004 17.9352 3.00117 17.7379C2.9923 17.5407 3.03399 17.3445 3.12229 17.168L5.04039 13.3318V9.36922ZM10.5863 18.8439C10.7711 19.164 11.0368 19.4297 11.3569 19.6145C11.677 19.7993 12.04 19.8966 12.4096 19.8966C12.7792 19.8966 13.1422 19.7993 13.4623 19.6145C13.7824 19.4297 14.0482 19.164 14.233 18.8439H10.5863ZM12.4096 4.10549C11.0136 4.10549 9.67473 4.66006 8.68759 5.6472C7.70045 6.63434 7.14588 7.97319 7.14588 9.36922V13.3318C7.14586 13.6585 7.06981 13.9807 6.92375 14.2729L5.69204 16.7384H19.1282L17.8965 14.2729C17.7501 13.9807 17.6737 13.6585 17.6733 13.3318V9.36922C17.6733 7.97319 17.1188 6.63434 16.1316 5.6472C15.1445 4.66006 13.8056 4.10549 12.4096 4.10549Z" fill="#737373"/>
              </svg>
              <p class="text-17">Notification</p>
            </div>
            <div class="flex flex-row">
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L8 8L1.5 14.5" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div id="accessibilitySettings" class="w-full mt-6">
        <h2 class="text-light-mode-accent text-secondary mb-3.5">Accessibility</h2>
        <div class="flex flex-col bg-settings-bg rounded-13">
          <div id="modeSettings" class="flex flex-row flex-item items-center justify-between w-full p-3.5">
            <div class="flex flex-row gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C9.5 21 7.375 20.125 5.625 18.375C3.875 16.625 3 14.5 3 12C3 9.5 3.875 7.375 5.625 5.625C7.375 3.875 9.5 3 12 3C12.2333 3 12.4627 3.00833 12.688 3.025C12.9127 3.04167 13.1333 3.06667 13.35 3.1C12.6667 3.58333 12.121 4.21233 11.713 4.987C11.3043 5.76233 11.1 6.6 11.1 7.5C11.1 9 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.4167 12.9 18.2583 12.6957 19.025 12.287C19.7917 11.879 20.4167 11.3333 20.9 10.65C20.9333 10.8667 20.9583 11.0873 20.975 11.312C20.9917 11.5373 21 11.7667 21 12C21 14.5 20.125 16.625 18.375 18.375C16.625 20.125 14.5 21 12 21ZM12 19C13.4667 19 14.7833 18.596 15.95 17.788C17.1167 16.9793 17.9667 15.925 18.5 14.625C18.1667 14.7083 17.8333 14.775 17.5 14.825C17.1667 14.875 16.8333 14.9 16.5 14.9C14.45 14.9 12.704 14.1793 11.262 12.738C9.82067 11.296 9.1 9.55 9.1 7.5C9.1 7.16667 9.125 6.83333 9.175 6.5C9.225 6.16667 9.29167 5.83333 9.375 5.5C8.075 6.03333 7.021 6.88333 6.213 8.05C5.40433 9.21667 5 10.5333 5 12C5 13.9333 5.68333 15.5833 7.05 16.95C8.41667 18.3167 10.0667 19 12 19Z" fill="#67696B"/>
              </svg>
              <p class="text-17">Dark/Light Mode</p>
            </div>
            <div class="flex flex-row">
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L8 8L1.5 14.5" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div id="contrastSettings" class="flex flex-row flex-item items-center justify-between w-full p-3.5">
            <div class="flex flex-row gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.5C17.52 21.5 22 17.02 22 11.5C22 5.98 17.52 1.5 12 1.5C6.48 1.5 2 5.98 2 11.5C2 17.02 6.48 21.5 12 21.5ZM13 3.57C16.94 4.06 20 7.42 20 11.5C20 15.58 16.95 18.94 13 19.43V3.57Z" fill="#737373"/>
              </svg>
              <p class="text-17">Contrast</p>
            </div>
            <div class="flex flex-row">
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L8 8L1.5 14.5" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div id="fontSizeSettings" class="flex flex-row flex-item items-center justify-between w-full p-3.5">
            <div class="flex flex-row gap-2">
              <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.93772 3C7.16522 3 6.47647 3.4875 6.22147 4.2175L2.05272 16.1275C2.01201 16.2437 1.99459 16.3668 2.00146 16.4898C2.00832 16.6127 2.03934 16.7331 2.09273 16.8441C2.20056 17.0682 2.39301 17.2403 2.62772 17.3225C2.86244 17.4047 3.1202 17.3903 3.34431 17.2825C3.56842 17.1747 3.74051 16.9822 3.82272 16.7475L5.24397 12.6875H10.6315L12.0527 16.7475C12.1349 16.9822 12.307 17.1747 12.5311 17.2825C12.7552 17.3903 13.013 17.4047 13.2477 17.3225C13.4824 17.2403 13.6749 17.0682 13.7827 16.8441C13.8905 16.62 13.9049 16.3622 13.8227 16.1275L9.65397 4.2175C9.52935 3.86172 9.29726 3.55346 8.9898 3.33535C8.68233 3.11724 8.31469 3.00005 7.93772 3ZM9.97522 10.8125L7.93772 4.99L5.90022 10.8125H9.97522ZM16.394 14.5575C16.394 14.2788 16.744 13.625 17.834 13.625H20.0002C19.6327 14.905 18.5277 15.5 17.6252 15.5C17.0627 15.5 16.779 15.3325 16.6352 15.1888C16.5555 15.1045 16.4932 15.0054 16.4518 14.8971C16.4104 14.7888 16.3907 14.6734 16.394 14.5575ZM20.1252 15.5V16.4375C20.1252 16.6861 20.224 16.9246 20.3998 17.1004C20.5756 17.2762 20.8141 17.375 21.0627 17.375C21.3114 17.375 21.5498 17.2762 21.7256 17.1004C21.9015 16.9246 22.0002 16.6861 22.0002 16.4375V12.6875C22.0002 11.2913 21.6502 10.1063 20.909 9.2575C20.1515 8.3925 19.0927 8 17.9377 8C17.2752 8 16.7552 8.0875 16.3052 8.24375C15.8827 8.39 15.5552 8.58625 15.3002 8.73875L15.269 8.7575C15.0555 8.88514 14.9014 9.09236 14.8407 9.33357C14.8106 9.45301 14.8044 9.5772 14.8223 9.69906C14.8403 9.82091 14.882 9.93804 14.9452 10.0438C15.0084 10.1495 15.0918 10.2417 15.1907 10.3152C15.2895 10.3887 15.4019 10.442 15.5213 10.472C15.7625 10.5327 16.018 10.4951 16.2315 10.3675C16.5065 10.2025 16.6877 10.0963 16.919 10.0162C17.1415 9.93875 17.4477 9.875 17.9377 9.875C18.6577 9.875 19.1602 10.1075 19.4977 10.4925C19.7365 10.765 19.9402 11.1713 20.0477 11.75H17.834C16.0065 11.75 14.5115 12.9712 14.519 14.5675C14.5227 15.245 14.7577 15.9625 15.309 16.5138C15.8677 17.0737 16.6652 17.375 17.6252 17.375C18.8752 17.375 19.8127 16.4375 19.8127 15.5H20.1252Z" fill="#67696B"/>
              </svg>
              <p class="text-17">Font Size</p>
            </div>
            <div class="flex flex-row">
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L8 8L1.5 14.5" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div id="accountSettings" class="w-full mt-6">
        <h2 class="text-light-mode-accent text-secondary mb-3.5">Account</h2>
        <div class="flex flex-col bg-settings-bg rounded-13">
          <div id="logOut" class="flex flex-row items-center justify-between w-full p-3.5">
            <div class="flex flex-row gap-2">
              <svg width="24" height="24" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 6V4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H12C12.5304 18 13.0391 17.7893 13.4142 17.4142C13.7893 17.0391 14 16.5304 14 16V14" stroke="#67696B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 10H21L18 7M18 13L21 10" stroke="#67696B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p class="text-17 text-light-mode-accent">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
}

async function displayListOfCircles(data) {
  let circleListArr = data.UserCircle.map((obj) => {
    let circleName = document.createElement("p");
    circleName.className = "text-center text-secondary";
    circleName.textContent = obj.circle.name;
    return `
      <div id="${obj.circle.id}" class="circle">
        <div class="flex justify-center">
          <img src="${obj.circle.picture}" class="rounded-full w-100 h-100 object-cover cursor-pointer border-circle border-black"/>
        </div>
        ${circleName.outerHTML}
      </div>`;
  });
  return circleListArr;
}

async function displayListOfCirclesHorizontally(data) {
  let circleListArr = data.UserCircle.map((obj) => {
    let circleName = document.createElement("p");
    circleName.className = "text-center text-secondary break-words text-wrap";
    circleName.textContent = obj.circle.name;
    return `
      <div id="${obj.circle.id}" class="circle w-85 h-104">
        <div class="flex justify-center w-85 h-85 mb-1">
          <img src="${obj.circle.picture}" class="rounded-full w-85 h-85 object-cover cursor-pointer border-circle border-light-mode-accent"/>
        </div>
        ${circleName.outerHTML}
      </div>`;
  });
  return circleListArr;
}

async function displayPhotoUpload(albumData) {
  if (albumData === undefined) {
    pageName.textContent = "New Album";
    leftHeaderButton.innerHTML = `<img src="/lightmode/close_icon.svg" alt="Close Button" id="closeButton">`;
  }
  
  if (albumData) {
    pageName.textContent = "Add Photos";
    leftHeaderButton.innerHTML = `<img src="/lightmode/close_icon.svg" alt="Close Button" id="backToAlbumButton">`;
    leftButtonSpan.setAttribute("albumId", `${albumData.data.id}`);
  }

  rightHeaderButton.innerHTML = "";

  pageContent.innerHTML = `
    <div class="flex flex-col h-full w-full justify-center items-center">
      <div class="font-light text-11 text-center text-dark-grey w-full">
        <p>Select which photos you want to add to</p>
        <p>your album</p>
      </div>
  
      <div id="addPhotos" class="flex-1 flex flex-col justify-start items-center w-full">
        <div class="flex flex-col items-center">
          <form>
            <input id="fileUpload" type="file" class="hidden" multiple="false" />
          </form>
          <div class="flex justify-center mt-64 md:mt-52 mb-6">
            <img id="uploadIcon" src="/lightmode/upload_photo.svg" alt="Upload Icon" />
          </div>
          <div class="flex justify-center">
            <p class="text-base text-grey leading-body">drag and drop to&nbsp;</p>
            <p class="text-base underline text-grey leading-body cursor-pointer">upload</p>
          </div>
          <div class="flex justify-center mt-4 mb-96">
            <p class="text-grey text-secondary leading-secondary">PNG, JPEG, JPG</p>
          </div>
        </div>
      </div>
    </div>`;

  const uploadSection = document.querySelector("#addPhotos");

  const fileInput = document.querySelector("#fileUpload");

  if (uploadSection.getAttribute("listener") !== true) {
    uploadSection.addEventListener("mousedown", sectionUploadClick, true);
  }

  if (fileInput.getAttribute("listener") !== true) {
    fileInput.addEventListener("input", async function (event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = await uploadFile(files[i]);
        albumPhotos.push(file);
      }
      if (files.length > 0) {
        await displayPhotoUploadPreview(albumPhotos);
        nav.classList.add("hidden");
        await cleanUpSectionEventListener();
      }
    });
  }

  if (uploadSection.getAttribute("listener") !== true) {
    uploadSection.addEventListener("dragover", sectionDrag, true);
    uploadSection.addEventListener("drop", sectionDrop, true);
  }

  uploadSection.classList.remove("imageUploadSection");
}

function displayPhotoUploadPreview(albumPhotos) {
  const albumId = leftButtonSpan.getAttribute("albumId");
  const rightButtonSpan = document.querySelector(".rightButtonSpan");

  if ((albumId === undefined) || (albumId === null)) {
    pageName.textContent = "New Album";
    leftHeaderButton.innerHTML = `<img src="/lightmode/close_icon.svg" alt="Close Button" id="closeButton">`;
    rightHeaderButton.textContent = "Next";
    rightButtonSpan.id = "albumNextButton";
    rightHeaderButton.className = "text-lg";
  }

  if (albumId) {
    pageName.textContent = "Add Photos";
    leftHeaderButton.innerHTML = `<img src="/lightmode/close_icon.svg" alt="Close Button" id="backToAlbumButton">`;
    rightHeaderButton.textContent = "Done";
    rightButtonSpan.id = "updateAlbum";
    rightHeaderButton.className = "text-lg";
  }

  const carouselDiv = document.createElement("div");
  carouselDiv.id = "carousel";
  carouselDiv.className = "keen-slider overflow-hidden";

  const mappedPhotos = albumPhotos.map((obj) => {
    return {
      photoSrc: obj.data,
    };
  });

  albumObj.photos = mappedPhotos;

  mappedPhotos.forEach((photo, index) => {

    const slideDiv = document.createElement("div");
    slideDiv.className = "keen-slider__slide";

    const img = document.createElement("img");
    img.className = "rounded-12.75 h-image w-image object-cover";
    img.src = photo.photoSrc;
    img.alt = `image ${index}`;

    slideDiv.appendChild(img);

    carouselDiv.appendChild(slideDiv);
  });

  const pageContent = document.querySelector("#pageContent");
  pageContent.innerHTML = `
      <div class="flex flex-col h-full w-full items-center">
        <div class="font-light text-11 justify-center text-center text-dark-grey w-full">
          <p>select which photos you want to add to</p>
          <p class="">your album</p>
        </div>
        <div id="addPhotos" class="flex-1 flex-col items-center bg-light-mode w-430 overflow-hidden p-2">
          <div class="w-full">
            
          </div>
          <div class="w-full mt-3">
            <h1 class="text-h2 leading-h2 font-medium">Upload more files<h1>
          </div>
          <div id="dropMore" class="flex-1 mx-auto items-center bg-light-grey w-full h-full border-t border-spacing-2 border-dashed border-grey">
            <form class="hidden">
              <input id="fileUpload" type="file" class="hidden" multiple="false"/>
            </form>
            <div class="flex flex-col justify-center items-center mx-auto">
              <div class="flex justify-center mt-28 md:mt-16 mb-5">
                <img id="uploadIcon" src="/lightmode/upload_photo_grey.svg" alt="Upload Icon"/>
              </div>
              <div class="flex justify-center">
                <p class="text-base text-dark-grey leading-body">drag and drop to&nbsp;</p>
                <p class="text-base underline text-dark-grey leading-body cursor-pointer">upload</p>
              </div>
              <div class="flex justify-center mt-4">
                <p class="text-dark-grey text-secondary leading-secondary">PNG, JPEG, JPG</p>
              </div>
            </div>
          </div>
          </div>
        </div>`;

  const addPhotos = document.querySelector("#addPhotos div.w-full");
  addPhotos.appendChild(carouselDiv);

  function navigation(slider) {
    let wrapper, dots;

    function createDiv(className) {
      const div = document.createElement("div");
      className.split(" ").forEach((name) => div.classList.add(name));
      return div;
    }

    function setupWrapper() {
      wrapper = createDiv("navigation-wrapper");
      slider.container.parentNode.appendChild(wrapper);
      wrapper.appendChild(slider.container);
    }

    function setupDots() {
      dots = createDiv("dots");
      slider.track.details.slides.forEach((_e, idx) => {
        const dot = createDiv("dot");
        dot.addEventListener("click", () => slider.moveToIdx(idx));
        dots.appendChild(dot);
      });
      wrapper.appendChild(dots);
    }

    slider.on("created", () => {
      setupWrapper();
      setupDots();
    });

    slider.on("slideChanged", () => {
      if (dots && dots.children) {
        const currentIndex = slider.track.details.rel;
        Array.from(dots.children).forEach((dot, idx) => {
          dot.classList.toggle("dot--active", idx === currentIndex);
        });
      }
    });
  }

  const slider = new KeenSlider(
    "#carousel",
    {
      loop: true,
      mode: "free-snap",
      slides: {
        origin: "center",
        perView: 2,
        spacing: 15,
      },
      loop: false,
      initial: 0,
      drag: true,
      dragStartThreshold: 10,
    },
    [navigation]
  );

  const uploadSection = document.querySelector("#dropMore");
  const fileInput = document.querySelector("#fileUpload");
  if (uploadSection.getAttribute("listener") !== true) {
    uploadSection.addEventListener("mousedown", sectionUploadClick, true);
  }

  if (fileInput.getAttribute("listener") !== true) {
    fileInput.addEventListener("input", async function (event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = await uploadFile(files[i]);
        albumPhotos.push(file);
      }
      
      if (files.length > 0) {
        await displayPhotoUploadPreview(albumPhotos);
        await cleanUpSectionEventListener();
      }
    });
  }

  if (uploadSection.getAttribute("listener") !== true) {
    uploadSection.addEventListener("dragover", sectionDrag, true);
    uploadSection.addEventListener("drop", sectionDrop, true);
  }

  uploadSection.classList.remove("imageUploadSection");
}

async function displayAlbumConfirmation() {
  const rightButtonSpan = document.querySelector(".rightButtonSpan");
  nav.classList.add("hidden");

  leftHeaderButton.innerHTML = `<img src="/lightmode/back_button.svg" alt="Back Button" id="albumConfirmationBackButton"/>`;

  pageName.textContent = "Post";

  rightHeaderButton.textContent = "Create"
  rightButtonSpan.id = "createAlbum";
  rightHeaderButton.className = "text-lg";

  const carouselDiv = document.createElement("div");
  carouselDiv.id = "carousel";
  carouselDiv.className = "keen-slider overflow-hidden";

  albumObj.photos.forEach((photo, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.className = "keen-slider__slide";

    const img = document.createElement("img");
    img.className = "rounded-12.75 h-image w-image object-cover";
    img.src = photo.photoSrc;
    img.alt = `image ${index}`;

    slideDiv.appendChild(img);
    carouselDiv.appendChild(slideDiv);
  });

  pageContent.innerHTML = `
    <div id="albumConfirmation" class="flex flex-col items-center p-4 bg-light-mode rounded-lg w-full">
      <div id="albumCarousel" class="flex-1 flex flex-col justify-between w-full px-4 m-40">
        <div class="w-full">
        
        </div>
      </div>
      <div id="albumCircle"class="flex flex-row justify-center items-center ml-4 w-full">
        <img id="circleImage" class="w-62 h-62 rounded-full" src="/placeholder_image.svg"/>
        <div class="flex flex-col ml-4">
          <h2 id="circleName" class="text-20 font-medium mr-2.5"></h2>
          <button id="editButton">
            <p class="text-light-mode-accent underline text-secondary">Edit<p>
          </button>
        </div>
      </div>
      <div class="flex-1 flex flex-col justify-between w-full px-4 mt-40">
        <form class="flex flex-col" onkeydown="return event.key != 'Enter';">
          <div class="flex items-center mt-4 mb-28">
              <label for="albumName" class="font-medium text-h2 mr-6">Title</label>
              <input
              type="text"
              placeholder="add a title to your album"
              id="albumName"
              class="w-full bg-transparent text-h2 text-text-grey font-light items-end border-none"
              required
              />
          </div>
        </form>
      </div>
      <div class="flex items-center justify-between w-full">
        <div class="mt-10">
          <p class="font-bold text-26 leading-h2 hidden">Edit</p>
        </div>
      </div>
      </div>
    </div>`;

  const circleImage = document.querySelector("#circleImage");

  circleImage.src = albumObj.circleSrc;
  circleName.textContent = albumObj.circleName;

  const createNewAlbum = document.querySelector("#albumCarousel div.w-full");
  createNewAlbum.appendChild(carouselDiv);

  function navigation(slider) {
    let wrapper, dots;

    function createDiv(className) {
      const div = document.createElement("div");
      className.split(" ").forEach((name) => div.classList.add(name));
      return div;
    }

    function setupWrapper() {
      wrapper = createDiv("navigation-wrapper");
      slider.container.parentNode.appendChild(wrapper);
      wrapper.appendChild(slider.container);
    }

    function setupDots() {
      dots = createDiv("dots");
      slider.track.details.slides.forEach((_e, idx) => {
        const dot = createDiv("dot");
        dot.addEventListener("click", () => slider.moveToIdx(idx));
        dots.appendChild(dot);
      });
      wrapper.appendChild(dots);
    }

    slider.on("created", () => {
      setupWrapper();
      setupDots();
    });

    slider.on("slideChanged", () => {
      if (dots && dots.children) {
        const currentIndex = slider.track.details.rel;
        Array.from(dots.children).forEach((dot, idx) => {
          dot.classList.toggle("dot--active", idx === currentIndex);
        });
      }
    });
  }

  const slider = new KeenSlider(
    "#carousel",
    {
      loop: true,
      mode: "free-snap",
      slides: {
        origin: "center",
        perView: 2,
        spacing: 15,
      },
      loop: false,
      initial: 0,
      drag: true,
      dragStartThreshold: 10,
    },
    [navigation]
  );
}

async function displayCircle(circleData) {
  const imgElement = document.querySelector("#profileBackButton");
  if (imgElement) {
    imgElement.classList.remove("hidden");
    imgElement.id = "circleToProfileButton"
  }
  
  const backSpan = document.querySelector(".backSpan");
  if (backSpan) {
    const circleId = backSpan.getAttribute("circleId");
    const imgElement = document.querySelector("#albumToCircleButton");
    if (circleId === null) {
      if (backSpan.getAttribute("username") === null) {
        leftHeaderButton.innerHTML = "";
      } else if (imgElement) {
        imgElement.id = "circleToProfileButton";
      }
    }
  } else {
      const circleId = circleData.circle.id;
      const backSpan = document.createElement("span");
      backSpan.className = "backSpan";
      const imgElement = document.createElement("img");
      if (leftButtonSpan.getAttribute("origin") === "fromExplore") {
        imgElement.id = "backToExplore";
      } else {
        imgElement.id = "albumToCircleButton";
      }
      imgElement.src = "/lightmode/back_button.svg";
      imgElement.alt = "Back Button";
      
      backSpan.setAttribute("circleId", circleId);
      backSpan.appendChild(imgElement);
      leftHeaderButton.appendChild(backSpan);
  }

  const circlePreviewBackButton = document.querySelector("#circlePreviewBackButton");
  const newAlbumToCircleButton = document.querySelector("#newAlbumToCircleButton");
  if (circlePreviewBackButton || newAlbumToCircleButton) {
    leftHeaderButton.innerHTML = "";
  }
  rightHeaderButton.innerHTML = `
  <div class="flex flex-row flex-nowrap gap-2 w-full h-22">
    <div class="flex gap-2">
      <button id="circleEditButton" class="${circleData.circle.ownerId === currentLocalUser ? "" : "hidden"}">
        <img src="/lightmode/edit_icon.svg"></img>
        <span circleid=${circleData.circle.id}></span>
      </button>
      <button id="circleShareButton">
        <svg width="22" height="22" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.52237 14.4666C9.62361 14.5669 9.70395 14.6862 9.75876 14.8174C9.81357 14.9487 9.84179 15.0895 9.84179 15.2316C9.84179 15.3737 9.81357 15.5145 9.75876 15.6458C9.70395 15.777 9.62361 15.8963 9.52237 15.9966L9.059 16.4574C8.56713 16.9483 7.98226 17.3375 7.33823 17.6022C6.69419 17.867 6.00375 18.0022 5.30685 18C4.25734 18.0003 3.23132 17.6911 2.35858 17.1114C1.48584 16.5317 0.805602 15.7076 0.403928 14.7434C0.00225372 13.7792 -0.102809 12.7181 0.102032 11.6945C0.306874 10.6709 0.812414 9.73068 1.55469 8.99285L4.69959 5.86537C5.36851 5.20026 6.20404 4.72503 7.11968 4.48888C8.03532 4.25274 8.99778 4.26427 9.90744 4.52227C10.8171 4.78027 11.6409 5.27537 12.2935 5.95632C12.9461 6.63726 13.4039 7.4793 13.6193 8.39525C13.655 8.53452 13.6624 8.67947 13.641 8.82161C13.6197 8.96375 13.57 9.10022 13.4949 9.22302C13.4198 9.34582 13.3209 9.45248 13.2038 9.53676C13.0867 9.62104 12.9539 9.68123 12.8132 9.71381C12.6724 9.74639 12.5265 9.75071 12.3841 9.72651C12.2416 9.70231 12.1055 9.65008 11.9836 9.57287C11.8617 9.49567 11.7565 9.39505 11.6742 9.27691C11.5919 9.15876 11.5342 9.02547 11.5043 8.88485C11.3765 8.34416 11.1057 7.84725 10.72 7.44547C10.3344 7.0437 9.84782 6.75166 9.31065 6.59953C8.77347 6.4474 8.20519 6.4407 7.66454 6.58014C7.12389 6.71958 6.63051 7.00008 6.23539 7.39266L3.09049 10.5201C2.65211 10.9557 2.35348 11.5108 2.23235 12.1152C2.11122 12.7196 2.17304 13.3461 2.40999 13.9156C2.64694 14.485 3.04838 14.9718 3.56354 15.3143C4.0787 15.6569 4.68443 15.8398 5.30413 15.84C5.71589 15.8411 6.12379 15.7611 6.50422 15.6044C6.88466 15.4478 7.23008 15.2177 7.52049 14.9274L7.98295 14.4666C8.08386 14.3658 8.20381 14.2858 8.3359 14.2312C8.46799 14.1766 8.60962 14.1485 8.75266 14.1485C8.8957 14.1485 9.03734 14.1766 9.16943 14.2312C9.30151 14.2858 9.42146 14.3658 9.52237 14.4666ZM19.4458 1.54541C18.4504 0.555883 17.1006 0 15.6932 0C14.2857 0 12.9359 0.555883 11.9405 1.54541L11.4781 2.00531C11.2741 2.2082 11.1595 2.48337 11.1595 2.7703C11.1595 3.05723 11.2741 3.3324 11.4781 3.53529C11.6821 3.73818 11.9588 3.85216 12.2473 3.85216C12.5359 3.85216 12.8126 3.73818 13.0166 3.53529L13.48 3.0745C14.068 2.4897 14.8656 2.16116 15.6972 2.16116C16.5289 2.16116 17.3264 2.4897 17.9145 3.0745C18.5025 3.6593 18.8329 4.45245 18.8329 5.27948C18.8329 6.10651 18.5025 6.89966 17.9145 7.48446L14.7642 10.6074C14.4738 10.8978 14.1284 11.128 13.7479 11.2846C13.3675 11.4413 12.9596 11.5213 12.5478 11.52C11.8414 11.5195 11.156 11.2817 10.6025 10.8452C10.0491 10.4087 9.66018 9.79912 9.49884 9.11525C9.43355 8.83622 9.25948 8.5944 9.01491 8.44301C8.77034 8.29161 8.47531 8.24303 8.19473 8.30795C7.91414 8.37288 7.67098 8.54599 7.51874 8.7892C7.3665 9.03242 7.31765 9.32581 7.38293 9.60484C7.65544 10.763 8.31338 11.7957 9.25005 12.5354C10.1867 13.2751 11.3472 13.6784 12.5433 13.68H12.5478C13.245 13.6819 13.9357 13.5463 14.5799 13.2811C15.2241 13.0158 15.809 12.6262 16.3009 12.1347L19.4458 9.00725C19.9385 8.51733 20.3294 7.93569 20.5961 7.29553C20.8627 6.65538 21 5.96925 21 5.27633C21 4.58341 20.8627 3.89728 20.5961 3.25713C20.3294 2.61697 19.9385 2.03532 19.4458 1.54541Z" fill="black"/>
        </svg>
      </button>
    </div>
  </div>`;
  pageName.textContent = "";
  let currentUserProfilePicture = null;
  let currentUserUsername = null;
  const memberList = circleData.members.map((obj) => {
    if (obj.user.username === currentLocalUser) {
      currentUserProfilePicture = obj.user.profilePicture;
      currentUserUsername = obj.user.username;
    }
    return `<img src="${obj.user.profilePicture}" class="w-42 h-42 rounded-full object-cover"/>`;
  });

  const albumList = circleData.circle.albums.map((obj) => {
    let albumName = document.createElement("p");
    albumName.className = "text-white text-shadow shadow-black";
    albumName.textContent = obj.name;
    const userLiked = obj.likes.some(like => like.userId === currentLocalUser);
    const likedClass = userLiked ? "liked" : "";
    const heartColor = userLiked ? "#FF4646" : "none";
    const heartColorStroke = userLiked ? "#FF4646" : "white";

    return `
      <div class="w-full h-min relative album" id="${obj.id}">
        <img class="w-full max-h-56 h-min rounded-xl object-cover" src="${obj.photos[0].src}"/>
        <div class="m-2 text-secondary font-semibold absolute inset-0 flex items-end justify-start">
          ${albumName.outerHTML}
        </div>
        <div class="absolute inset-0 flex items-end justify-end gap-1 p-2">
          <div class="like cursor-pointer ${likedClass}">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="${heartColor}" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.22318 16.2905L9.22174 16.2892C6.62708 13.9364 4.55406 12.0515 3.11801 10.2946C1.69296 8.55118 1 7.05624 1 5.5C1 2.96348 2.97109 1 5.5 1C6.9377 1 8.33413 1.67446 9.24117 2.73128L10 3.61543L10.7588 2.73128C11.6659 1.67446 13.0623 1 14.5 1C17.0289 1 19 2.96348 19 5.5C19 7.05624 18.307 8.55118 16.882 10.2946C15.4459 12.0515 13.3729 13.9364 10.7783 16.2892L10.7768 16.2905L10 16.9977L9.22318 16.2905Z" stroke="${heartColorStroke}" stroke-width="2"/>
            </svg>
          </div>
          <div class="comment cursor-pointer">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 19.125C8.79414 19.125 7.12658 18.6192 5.70821 17.6714C4.28983 16.7237 3.18434 15.3767 2.53154 13.8006C1.87873 12.2246 1.70793 10.4904 2.04073 8.81735C2.37352 7.14426 3.19498 5.60744 4.4012 4.40121C5.60743 3.19498 7.14426 2.37353 8.81735 2.04073C10.4904 1.70793 12.2246 1.87874 13.8006 2.53154C15.3767 3.18435 16.7237 4.28984 17.6714 5.70821C18.6192 7.12658 19.125 8.79414 19.125 10.5C19.125 11.926 18.78 13.2705 18.1667 14.455L19.125 19.125L14.455 18.1667C13.2705 18.78 11.925 19.125 10.5 19.125Z" stroke="#F8F4EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>`;
  });

  let circleName = document.createElement("p");
  circleName.className = "text-center text-20 font-bold break-words text-wrap max-w-[234px]";
  circleName.textContent = circleData.circle.name;
  pageContent.innerHTML = `
    <div id="circlePage" class="w-full px-0 mx-0">
      <div id="circleImage" class="relative flex justify-center mt-6 mb-1.5">
        <img src="${circleData.circle.picture}" class="rounded-full w-180 h-180 object-cover"/>
      </div>
      <div id="circleName" class="relative my-3 flex justify-center items-center max-w-full h-11">
        ${circleName.outerHTML}
      </div>
      <div class="grid grid-cols-1 place-items-center justify-center h-8">
        <span class="privacyState">
            <label class="inline-flex items-center cursor-pointer">
            <input id="privacyCheckbox" type="checkbox" value="" class="sr-only peer">
            <img id="privacyIcon" src="${circleData.circle.isPublic ? "/lightmode/globe_icon.svg" : "/lightmode/lock_icon.svg"}" alt="Lock icon" class="mr-4">
            <span id="privacyLabel" class="text-sm font-medium leading-body text-14 mr-4 w-12">
              ${circleData.circle.isPublic ? "Public" : "Private"}
            </span>
            <div class="hidden privacyCheckboxDiv peer relative h-5 w-10 rounded-full outline outline-1 outline-black after:absolute after:start-[2px] after:top-0 after:h-4 after:w-4 after:rounded-full after:bg-black after:border after:border-black after:transition-all after:content-[''] peer-checked:bg-cover peer-checked:bg-black border-2 peer-checked:outline-black peer-checked:after:translate-x-5 peer-checked:after:border-white peer-checked:after:border-opacity-80 peer-checked:after:border-2 peer-checked:after:bg-black rtl:peer-checked:after:-translate-x-full"></div>
        </span>
        </label>
      </div>
      <div class="grid grid-cols-5 place-items-center mt-12 mb-2">
        <p class="grid-span-1 text-base font-medium">${circleData.members.length} Friends</p>
      </div>
      <div class="flex gap-2 memberList">
        ${memberList.join("")}
      </div>
      <div id="albumList" class="pb-48 w-full">
        <div class="mt-6 mb-2">
          <p class="text-24 font-medium">Albums</p>
        </div>
        <div class="columns-2 gap-4 space-y-4 grid-flow-row">
          ${albumList.join("")}
        </div>
      </div>
    </div>`;
  const privacyCheckbox = document.querySelector("#privacyCheckbox")
  circleData.circle.isPublic ? privacyCheckbox.setAttribute("checked", true) : privacyCheckbox.removeAttribute("checked")
  const albumListTarget = document.querySelector("#albumList");
  albumListTarget.addEventListener("click", async function (event) {
    event.preventDefault();
    const albumDiv = event.target.closest(".album");
    const like = event.target.closest(".like");
    const comment = event.target.closest(".comment");

    if (like) {
      const albumId = event.target.closest("div.album").getAttribute("id");
      if (like.classList.contains("liked")) {
        like.classList.remove("liked");
        like.querySelector("svg path").setAttribute("fill", "none");
        like.querySelector("svg path").setAttribute("stroke", "#FFFFFF");
        await likeAlbum(albumId);
      } else {
        like.classList.add("liked");
        like.querySelector("svg path").setAttribute("fill", "#FF4646");
        like.querySelector("svg path").setAttribute("stroke", "#FF4646");
        await likeAlbum(albumId);
      }
      return;
    }

    if (comment) {
      await displayComments(albumDiv.id, currentUserProfilePicture, currentLocalUser);
      return;
    }

    if (albumDiv) {

      if (albumDiv.hasAttribute("id")) {
        let { success, data, error } = await getAlbum(albumDiv.id);
        if (success && data) {
          await displayAlbum(data);
        }
      }
    }
  });

  if (circleData.circle.ownerId === currentLocalUser) {
    const inviteMore = document.createElement("img");
    inviteMore.src = "/invite_more_friends.svg";
    inviteMore.id = "inviteMoreUsers";
    inviteMore.className = "w-42 h-42 rounded-full object-cover";
    const memberList = document.querySelector(".memberList")
    memberList.append(inviteMore);

    memberList.addEventListener("click", async function (event) {
      const portrait = event.target.closest("img")
      if (portrait) {
        if (portrait.id === "inviteMoreUsers") {
          await displayInviteFriends(true, circleData.circle.id)
        }
      }
    })
  }
}

async function displayCircleInvites() {
  pageName.textContent = "Circle Invites";
  leftHeaderButton.innerHTML = `<img src="/lightmode/back_button.svg" alt="Back Button" id="toActivity">`;
  const { circleInvites } = await getActivities(currentLocalUser);
  let circleInviteList = circleInvites.map((invite) => {
    let circleName = document.createElement("h2");
    circleName.className = "font-medium text-14 leading-tertiary";
    circleName.textContent = invite.circle.name;
    return `
    <div class="flex items-center my-3">
      <div class="flex-none w-58">
        <img class="rounded-input-box w-58 h-58 object-cover" src="${invite.circle.picture}" alt="${invite.circle.name}'s picture">
      </div>
      <div class="ml-8 flex-none w-110">
        ${circleName.outerHTML}
      </div>
      <div class="ml-auto w-166">
        <form class="flex text-white gap-2">
          <button identifier="${invite.circle.id}" sentTo="${invite.invitee_username}" name="acceptCircleInvite" class="w-request h-request rounded-input-box bg-light-mode-accent">accept</button>
          <button identifier="${invite.circle.id}" sentTo="${invite.invitee_username}" name="declineCircleInvite" class="w-request h-request rounded-input-box bg-dark-grey">decline</button>
        </form>
      </div>
    </div>`;
  }).join("");

  pageContent.innerHTML = `<div id="circleInviteList" class="flex flex-col pb-200">${circleInviteList}</div>`;
  const circleInviteListPage = document.querySelector("#circleInviteList");
  circleInviteListPage.addEventListener("click", async function (event) {
    event.preventDefault();
    const id = event.target.getAttribute("identifier");
    const invitee = event.target.getAttribute("sentTo");
    switch (event.target.name) {
      case "acceptCircleInvite":
        await acceptCircleInvite(id, invitee);
        await displayCircleInvites();
        break;
      case "declineCircleInvite":
        await declineCircleInvite(id, invitee);
        await displayCircleInvites();
        break;
      default:
        break;
    }
  });
}

async function displayAlbum(albumData) {
  const backSpan = document.querySelector(".backSpan");
  const leftButtonImg = document.querySelector(".backSpan img");
  const album = document.querySelector(".album");
  const imgElement = document.querySelector("#circleToProfileButton");
  const albumConfirmationBackButton = document.querySelector("#albumConfirmationBackButton");
  const backToAlbumButton = document.querySelector("#backToAlbumButton")

  if (leftButtonSpan.getAttribute("origin") === "fromExplore") {
    leftHeaderButton.id = "backToExplore";
  }

  if (backToAlbumButton) {
    backToAlbumButton.classList.add("hidden");
  }

  if (leftButtonImg) {
    leftButtonImg.classList.remove("hidden");
  }


  if (backSpan) {
    if (albumData.circle.id) {
      backSpan.setAttribute("circleId", `${albumData.circle.id}`);
    }
  } 
  
  if (album) {
    const albumId = album.getAttribute("id");
    if (albumId) {
      const profileBackButton = document.querySelector("#profileBackButton");
      if (profileBackButton) {
        profileBackButton.id = "albumToProfileButton";
      }
    }
  } 
  
  if (imgElement) {
    imgElement.id = "albumToCircleButton";
  } 
  if (albumConfirmationBackButton) {
    albumConfirmationBackButton.id = "newAlbumToCircleButton";
    albumConfirmationBackButton.setAttribute("circleId", `${albumData.circle.id}`);
  }

  const span = document.createElement("span");
  span.className = "backSpan";
  if (!backSpan && !imgElement && !albumConfirmationBackButton) {
    const imgElement = document.createElement("img");
    imgElement.id = "albumToCircleButton";
    imgElement.src = "/lightmode/back_button.svg";
    imgElement.alt = "Back Button";
    span.setAttribute("circleId", `${albumData.circle.id}`);
    span.appendChild(imgElement);
    leftHeaderButton.appendChild(span);
  }
  
  rightHeaderButton.innerHTML = `
  <div class="flex flex-row flex-nowrap gap-2 w-full h-22>
    <div class="flex">
      <button id="editButton" class="hidden">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 5.76359C22.0008 5.61883 21.9731 5.47533 21.9183 5.34132C21.8636 5.20731 21.7829 5.08542 21.681 4.98265L17.017 0.318995C16.9142 0.217053 16.7923 0.136401 16.6583 0.0816639C16.5243 0.026927 16.3808 -0.000818536 16.236 1.83843e-05C16.0912 -0.000818536 15.9477 0.026927 15.8137 0.0816639C15.6797 0.136401 15.5578 0.217053 15.455 0.318995L12.342 3.43176L0.319018 15.4539C0.217068 15.5566 0.136411 15.6785 0.0816699 15.8125C0.0269289 15.9466 -0.000818595 16.09 1.83857e-05 16.2348V20.8985C1.83857e-05 21.1902 0.115911 21.4699 0.3222 21.6762C0.52849 21.8825 0.808279 21.9984 1.10002 21.9984H5.76401C5.91793 22.0067 6.07189 21.9827 6.21591 21.9277C6.35993 21.8728 6.49079 21.7882 6.60001 21.6794L18.557 9.6573L21.681 6.59953C21.7814 6.49292 21.8632 6.37023 21.923 6.23655C21.9336 6.14888 21.9336 6.06025 21.923 5.97257C21.9281 5.92137 21.9281 5.86978 21.923 5.81858L22 5.76359ZM5.31301 19.7985H2.20001V16.6858L13.123 5.76359L16.236 8.87636L5.31301 19.7985ZM17.787 7.32547L14.674 4.2127L16.236 2.66182L19.338 5.76359L17.787 7.32547Z" fill="#0E0E0E"/>
        </svg>
      </button>
      <button id="shareButton">
        <img src="/lightmode/share_icon.svg" alt="Share Button" id="shareAlbum">
      </button>
    </div>
  </div>`;
  pageName.textContent = albumData.circle.name;

  const memberList = [];
  for (i = 0; i < albumData.circle.UserCircle.length; i++) {
    if (i > 3) {
      const count = albumData.circle.UserCircle.length - 3;
      const andMore = `<div class="w-25 h-25 rounded-full border-2 flex justify-center items-center bg-dark-grey">
        <p class="text-secondary text-white font-bold">+${count}</p>
      </div>`;
      memberList.push(andMore);
      break;
    }
    memberList.push(`<img id="user${i + 1}" src="${albumData.circle.UserCircle[i].user.profilePicture}" class="grid-item rounded-full object-cover">`);
  }

  const photoList = albumData.photos.map((obj) => {
    return `
    <div id="photo" class="w-full h-min relative photo" albumId="${obj.id}">
      <img class="w-full max-h-56 h-min rounded-xl object-cover" src="${obj.src}"/>
    </div>`;
  });
  let albumName = document.createElement("h2");
  albumName.className = "flex justify-center font-medium text-lg";
  albumName.textContent = albumData.name;
  
  let albumLikeCount = document.createElement("h3");
  albumLikeCount.className = "flex justify-center font-medium text-lg";
  albumLikeCount.textContent = albumData.likeCount;

  const userLiked = albumData.likes.some(like => like.user.username === currentLocalUser);
  const likedClass = userLiked ? "liked" : "";
  const heartColor = userLiked ? "#FF4646" : "none";
  const heartColorStroke = userLiked ? "#FF4646" : "black";
  
  pageContent.innerHTML = `
    <div id="albumPhotos">
      <div id="memberList" class="grid grid-rows-2 grid-cols-3 mt-8 mx-auto items-center justify-center w-265 gap-2 h-84">
        ${memberList.join("")}
      </div>
      <div class="mt-4">
        ${albumName.outerHTML}
      </div>
      <div class="mt-4 flex flex-row items-center justify-center gap-2 mx-auto">
        <div class="like cursor-pointer ${likedClass}" albumId=${albumData.id}>
          <svg width="20" height="19" viewBox="0 0 20 19" fill="${heartColor}" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.22318 16.2905L9.22174 16.2892C6.62708 13.9364 4.55406 12.0515 3.11801 10.2946C1.69296 8.55118 1 7.05624 1 5.5C1 2.96348 2.97109 1 5.5 1C6.9377 1 8.33413 1.67446 9.24117 2.73128L10 3.61543L10.7588 2.73128C11.6659 1.67446 13.0623 1 14.5 1C17.0289 1 19 2.96348 19 5.5C19 7.05624 18.307 8.55118 16.882 10.2946C15.4459 12.0515 13.3729 13.9364 10.7783 16.2892L10.7768 16.2905L10 16.9977L9.22318 16.2905Z" stroke="${heartColorStroke}" stroke-width="2"/>
          </svg>
        </div>
        ${albumLikeCount.outerHTML}
      </div>
      <div class="grid grid-cols-2 justify-between place-items-center mt-12 mb-2 mr-0">
        <p class="col-span-1 text-base font-medium justify-self-start">${albumData.photos.length} Photos</p>
        <button id="addPhotos" class="col-span-1 justify-self-end w-6 h-6" albumId="${albumData.id}">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M18.5 3V5.5M18.5 8V5.5M18.5 5.5H16M18.5 5.5H21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
        </button>
      </div>
      <div id="photoList" class="pb-28 w-full">
        <div class="columns-2 gap-4 space-y-4 grid-flow-row">
          ${photoList.join("")}
        </div>
      </div>
  </div>`;

  // album user display layout
  const user1 = document.querySelector("#user1");
  user1.classList.add("h-82", "w-82", "row-span-2", "col-start-2");

  const user2 = document.querySelector("#user2");
  if (user2) {
    user2.classList.add("h-43", "w-43", "col-start-1", "row-start-1", "justify-self-end");
  }

  const user3 = document.querySelector("#user3");
  if (user3) {
    user3.classList.add(
      "h-40", "w-40", "col-start-3", "row-start-2", "justify-self-start");
  }

  const user4 = document.querySelector("#user4");
  if (user4) {
    user4.classList.add("h-5", "w-5", "col-start-1", "row-start-2", "justify-self-end");
  }

  const albumPhotos = document.querySelector("#albumPhotos");
  albumPhotos.addEventListener("click", async(event) => {
    const photo = event.target.closest("#photo img");
    const overlay = event.target.closest("#photoOverlay");
    const addMorePhotos = event.target.closest("#addPhotos");
    const like = event.target.closest(".like");
    
    if (photo) {
      await displayPhoto(photo.src);
    }

    if (overlay) {
      const img = event.target.closest("#image");
      if (img) {
        event.stopPropagation();
      } else {
        overlay.remove();
      }
    }

    if (addMorePhotos) {
      const albumId = addMorePhotos.getAttribute("albumId");
      const albumData = await getAlbum(albumId);
      await displayPhotoUpload(albumData);
    }

    if (like) {
      const albumId = event.target.closest("div.like").getAttribute("albumId");
      if (like.classList.contains("liked")) {
        like.classList.remove("liked");
        like.querySelector("svg path").setAttribute("fill", "none");
        like.querySelector("svg path").setAttribute("stroke", "#000000");
        await likeAlbum(albumId);
        let { success, data, error } = await getAlbum(albumId);
        if (success && data) {
          await displayAlbum(data);
        }
      } else {
        like.classList.add("liked");
        like.querySelector("svg path").setAttribute("fill", "#FF4646");
        like.querySelector("svg path").setAttribute("stroke", "#FF4646");
        await likeAlbum(albumId);
        let { success, data, error } = await getAlbum(albumId);
        if (success && data) {
          await displayAlbum(data);
        }
      }
      return;
    }
  });
}

async function displayFriends(username) {
  nav.classList.add("hidden");

  // this is to show all users when the page first loads
  pageName.textContent = "Friends";
  leftHeaderButton.innerHTML = `<img src="/lightmode/back_button.svg" alt="Back Button" id="friendsBackButton"/>`;
  rightHeaderButton.innerHTML = "";

  pageContent.innerHTML = `
  <div class="font-light text-11 justify-center text-center text-dark-grey w-full bg-light-mode">
    <div class="w-380 bg-light-mode">
      <div class="fixed ml-2 bg-light-mode">
        <p>We don’t send notifications when you edit</p>
        <p>your Friends List.</p>
        <div class="h-9 bg-light-mode w-full mt-6">
            <form onkeydown="return event.key != 'Enter';" class="h-9 bg-light-mode w-full relative">
              <input id="searchFriendsBox" class="w-380    px-10 py-2 border-grey border-2 rounded-input-box text-secondary leading-secondary bg-white" placeholder="search friends"/>
              <img src="/lightmode/search_icon_grey.svg" alt="search icon" class="absolute left-3 top-search w-25 h-25"/>
            </form>
        </div>
      </div>
    </div>
  </div>
  <div id="allFriendsList" class="flex flex-col items-center mt-20 p-4 bg-light-mode rounded-lg w-full">
    <div class="flex flex-col shrink-0 mt-10 mb-6 justify-center w-380">
      <h1 id="friendCount" class="font-bold text-20 leading-body"></h1>
      <div id="friendsDiv" class="flex flex-col pb-24 w-full"></div>
    </div>
  </div>`;

  const searchBox = document.querySelector("#searchFriendsBox");
  const friendsDiv = document.querySelector("#friendsDiv");
  let friendsList = [];

  async function initializeSearch() {
    const friends = await getFriends(username);
    friendsList = friends;
                  
    updateSuggestedFriends(friends);
  }

  function updateSuggestedFriends(friends) {
    friendsDiv.innerHTML = displayFriendsList(friends).join("");
    if (friends.length === 1) {
      friendCount.innerHTML = `${friends.length} friend`;
    } else if (friends.length > 1) {
      friendCount.innerHTML = `${friends.length} friends`;
    } else {
      friendCount.innerHTML = `0 friends`;
    }
  }

  await initializeSearch();

  searchBox.addEventListener("input", (event) => {
    const filteredResults = storedSearchResults.filter((user) => {
      if (user.displayName){
        return (user.username.toLowerCase().includes(searchBox.value.toLowerCase()) || user.displayName.toLowerCase().includes(searchBox.value.toLowerCase()))
      }
        return user.username.toLowerCase().includes(searchBox.value.toLowerCase())
    });
    updateSuggestedFriends(filteredResults);
  });
}

function displayFriendsList(friends) {
  return friends.map((friend) => {
    let displayName = document.createElement("h2");
    let username = document.createElement("h2");
    displayName.className = "displayName font-medium text-14 leading-tertiary";
    username.className = "username font-light text-14 text-dark-grey";
    username.setAttribute("username", friend.username);
    displayName.textContent = friend.displayName ? friend.displayName : friend.username;
    username.textContent = `@${friend.username}`;
    return `
      <div class="flex items-center my-5">
        <div class="flex-none w-58">
          <img class="rounded-full w-58 h-58 object-cover" src="${friend.profilePicture}" alt="${friend.username}'s profile picture"/>
        </div>
        <div class="ml-8 flex-none w-207">
          ${displayName.outerHTML}
          ${username.outerHTML}
        </div>
        <div class="ml-auto pr-2">
          <div class="removeFriendIcon">
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 10.5C17.5 7.7375 15.2625 5.5 12.5 5.5C9.7375 5.5 7.5 7.7375 7.5 10.5C7.5 13.2625 9.7375 15.5 12.5 15.5C15.2625 15.5 17.5 13.2625 17.5 10.5ZM2.5 23V24.25C2.5 24.9375 3.0625 25.5 3.75 25.5H21.25C21.9375 25.5 22.5 24.9375 22.5 24.25V23C22.5 19.675 15.8375 18 12.5 18C9.1625 18 2.5 19.675 2.5 23ZM22.5 13H27.5C28.1875 13 28.75 13.5625 28.75 14.25C28.75 14.9375 28.1875 15.5 27.5 15.5H22.5C21.8125 15.5 21.25 14.9375 21.25 14.25C21.25 13.5625 21.8125 13 22.5 13Z" fill="#0E0E0E"/>
            </svg>
          </div>
        </div>
      </div>`;
  });
}

async function displayFriendRequests() {
  pageName.textContent = "Friend Requests";
  leftHeaderButton.innerHTML = `<img src="/lightmode/back_button.svg" alt="Back Button" id="toActivity"/>`;
  const { friendRequests } = await getActivities(currentLocalUser);

  let friendRequestsList = friendRequests.map((request) => {
    let username = document.createElement("h2");
    username.className = "font-medium text-14 leading-tertiary";
    username.textContent = `@${request.requester.username}`;
    const displayName = username.cloneNode(true);
    request.requester.displayName ? (displayName.textContent = request.requester.displayName) : (displayName.textContent = request.requester.username);
    return `
    <div class="flex items-center my-5">
    <div class="flex-none w-58">
      <img class="rounded-full w-58 h-58 object-cover" src="${request.requester.profilePicture}" alt="${request.requester.username}'s profile picture"/>
    </div>
    <div class="ml-8 flex-none w-110 grid grid-rows-2">
      <div>
        ${displayName.outerHTML}
      </div>
      <div>
        ${username.outerHTML}
      </div>
    </div>
    <div class="ml-auto w-166">
      <form class="flex text-white gap-2">
        <button identifier="${request.requesterName}" sentTo="${request.requesteeName}" name="acceptFriendRequest" class="w-request h-request rounded-input-box bg-light-mode-accent">accept</button>
        <button identifier="${request.requesterName}" sentTo="${request.requesteeName}" name="declineFriendRequest" class="w-request h-request rounded-input-box bg-dark-grey">decline</button>
      </form>
    </div>
  </div>`;
  }).join("");

  pageContent.innerHTML = `<div id="friendRequestsList" class="flex flex-col pb-200">
    ${friendRequestsList}
  </div>`;
  const friendRequestsListPage = document.querySelector("#friendRequestsList");
  friendRequestsListPage.addEventListener("click", async function (event) {
    event.preventDefault();
    const id = event.target.getAttribute("identifier");
    const invitee = event.target.getAttribute("sentTo");
    switch (event.target.name) {
      case "acceptFriendRequest":
        await acceptFriendRequest(id, invitee);
        await displayFriendRequests();
        break;
      case "declineFriendRequest":
        await removeFriendRequest(id, invitee);
        await displayFriendRequests();
        break;
      default:
        break;
    }
  });
}

async function displayPhoto(photoSrc) {
  const albumPhotos = document.querySelector("#albumPhotos");
  const photoDiv = document.createElement("div");
  photoDiv.className = "absolute top-0 left-0 bg-overlay-bg h-screen w-screen flex justify-center items-center mx-auto z-20";
  photoDiv.id = "photoOverlay";
  const personalView = document.createElement("img");
  personalView.src = `${photoSrc}`;
  personalView.id = "image";
  personalView.className = "w-430 object-cover rounded-xl";

  photoDiv.appendChild(personalView);
  albumPhotos.appendChild(photoDiv);
}

async function displayListOfAlbums(data, user, profile = false) {
  const albumList = data.Album.map((obj) => {
    let albumName = document.createElement("p");
    albumName.className = "text-white text-shadow shadow-black";
    albumName.textContent = obj.name;
    let userSpan = document.createElement("span");
    userSpan.className = "user";
    userSpan.setAttribute("username", `${user}`);
    const circleImage = `
    <div class="absolute top-0 right-0 m-2 flex items-start justify-end gap-1 p2">
      <img src="${obj.circle.picture}" class="w-8 rounded-full object-cover"/>
    </div>`;

    const userLiked = obj.likes.some(like => like.user.username === currentLocalUser);
    const likedClass = userLiked ? "liked" : "";
    const heartColor = userLiked ? "#FF4646" : "none";
    const heartColorStroke = userLiked ? "#FF4646" : "white";

    return `
      <div class="w-full h-min relative overflow-hidden album" id="${obj.id}">
        ${userSpan.outerHTML}
        <img class="w-full max-h-56 h-min rounded-xl object-cover" src="${obj.photos[0].src}"/>
        ${profile ? circleImage : null}
        <div class="m-2 text-secondary font-semibold absolute inset-0 flex items-end justify-start">
          ${albumName.outerHTML}
        </div>
        <div class="absolute inset-0 flex items-end justify-end gap-1 p-2">
          <div class="like cursor-pointer ${likedClass}">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="${heartColor}" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.22318 16.2905L9.22174 16.2892C6.62708 13.9364 4.55406 12.0515 3.11801 10.2946C1.69296 8.55118 1 7.05624 1 5.5C1 2.96348 2.97109 1 5.5 1C6.9377 1 8.33413 1.67446 9.24117 2.73128L10 3.61543L10.7588 2.73128C11.6659 1.67446 13.0623 1 14.5 1C17.0289 1 19 2.96348 19 5.5C19 7.05624 18.307 8.55118 16.882 10.2946C15.4459 12.0515 13.3729 13.9364 10.7783 16.2892L10.7768 16.2905L10 16.9977L9.22318 16.2905Z" stroke="${heartColorStroke}" stroke-width="2"/>
            </svg>
          </div>
          <div class="comment cursor-pointer" albumid="${obj.id}">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 19.125C8.79414 19.125 7.12658 18.6192 5.70821 17.6714C4.28983 16.7237 3.18434 15.3767 2.53154 13.8006C1.87873 12.2246 1.70793 10.4904 2.04073 8.81735C2.37352 7.14426 3.19498 5.60744 4.4012 4.40121C5.60743 3.19498 7.14426 2.37353 8.81735 2.04073C10.4904 1.70793 12.2246 1.87874 13.8006 2.53154C15.3767 3.18435 16.7237 4.28984 17.6714 5.70821C18.6192 7.12658 19.125 8.79414 19.125 10.5C19.125 11.926 18.78 13.2705 18.1667 14.455L19.125 19.125L14.455 18.1667C13.2705 18.78 11.925 19.125 10.5 19.125Z" stroke="#F8F4EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>`;
  });
  return albumList;
}

async function displayComments(albumId, currentUserProfilePicture, currentUserUsername) {
  const fetchPfp = await getCurrentUserProfilePicture()
  if (fetchPfp.data && fetchPfp.success) {
    currentUserProfilePicture = fetchPfp.data
  }

  const { success, data } = await getComments(albumId);
  //return early do something on error
  if (!(success && data)) {
    console.log("could not fetch comment data");
    return;
  }

  const showCommentsRecursively = (comments) => {
    const arr = comments.map((comment) => {
      const likeDiv = document.createElement("div");
      likeDiv.className = "like h-full cursor-pointer";
      likeDiv.innerHTML = `
      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.22318 16.6155L9.22174 16.6142C6.62708 14.2613 4.55406 12.3765 3.11801 10.6196C1.69296 8.87613 1 7.38119 1 5.82495C1 3.28843 2.97109 1.32495 5.5 1.32495C6.9377 1.32495 8.33413 1.99941 9.24117 3.05623L10 3.94038L10.7588 3.05623C11.6659 1.99941 13.0623 1.32495 14.5 1.32495C17.0289 1.32495 19 3.28843 19 5.82495C19 7.38119 18.307 8.87613 16.882 10.6196C15.4459 12.3765 13.3729 14.2613 10.7783 16.6142L10.7768 16.6155L10 17.3226L9.22318 16.6155Z" stroke="#0E0E0E" stroke-width="2"/>
      </svg>`;

      const posterH1 = document.createElement("h1");
      posterH1.className = "font-bold text-secondary cursor-pointer";
      const poster = comment.user.displayName ? comment.user.displayName : comment.user.username;
      posterH1.textContent = poster;
      posterH1.textContent ? posterH1.textContent : (posterH1.textContent = "Deleted");
      if (posterH1.textContent === "Deleted") {
        posterH1.className = posterH1.className.replace("cursor-pointer", "").trim();
        likeDiv.className = likeDiv.className.replace("cursor-pointer", "").trim();
      }
      const postMsgContainer = document.createElement("div");
      postMsgContainer.className = "comment-text-container flex-grow";
      const postMsg = document.createElement("p");
      postMsg.className = "text-wrap break-words";
      postMsg.textContent = comment.message ? comment.message : "message removed";
      postMsgContainer.appendChild(postMsg);

      if (comment.likedBy !== null && comment.likedBy.includes(currentUserUsername) && poster !== null) {
        likeDiv.querySelector("svg path").setAttribute("fill", "#FF4646");
        likeDiv.querySelector("svg path").setAttribute("stroke", "#FF4646");
        likeDiv.classList.add("liked");
      }

      return `<div class="comment relative flex flex-row items-start h-full my-4" id="${comment.id}" user="${comment.user.displayName ? comment.user.displayName : comment.user.username}">
      <div class="flex-none w-58 items-center h-full mr-1 mt-1">
        <img src="${comment.user.profilePicture ? comment.user.profilePicture : "/placeholder_image.svg"}" class="w-47 h-47 rounded-full cursor-pointer">
      </div>
      <div class=" flex flex-col w-294">
        <div class="flex flex-row gap-2">
          ${posterH1.outerHTML}
          <p class="text-time text-11">${comment.createdAt}</p>
        </div>
          ${postMsgContainer.outerHTML}
        <div class="flex items-center space-x-2">
          <a class="text-time text-11 underline replyButton w-8 cursor-pointer">Reply</a>
          ${comment.user.username === currentLocalUser ? `<img src="/lightmode/more_options.svg" alt="more options"/ class="moreOptions w-5 h-5 cursor-pointer">` : ""}
        </div>
      </div>
      <div class="absolute right-0 top-2 flex flex-1 flex-col items-center">
        ${likeDiv.outerHTML}
        <div class="likeCount">
          <p class="h-3">${comment.likeCount}</p>
        </div>
      </div>
    </div>
    ${comment.replies ? `<div class="parentComment"><div class="childComment border-l border-comment-line pl-2 ml-3">${showCommentsRecursively(comment.replies)}</div></div>` : ""}`;
    });
    return arr.join("");
  };

  const modal = document.querySelector("#modal");
  modal.classList.remove("hidden");
  modal.classList.add("shown");
  const modalContent = document.querySelector("#modalContent");
  modalContent.innerHTML = `
  <div class="flex flex-col max-w-430 max-h-527 justify-center mx-auto text-black">
    <div class="border-b-circle border-comment-divider mb-5">
      <h1 class="font-semibold text-23 text-center mb-2">Comments</p>
    </div>
    <div class="albumComments my-2 max-h-400 overflow-y-scroll">
    ${showCommentsRecursively(data)}
    </div>
    <div class="flex w-full items-end mt-2">
      <div class="relative flex flex-row mr-3">
        <img class="rounded-full h-47 w-47" src="${currentUserProfilePicture}" alt="${currentUserUsername}'s profile picture"/>
      </div>
      <div id="comment" class="relative flex-1 h-full rounded-input-box">
        <div id="replyContent"></div>
        <div class="flex items-center mt-4">
          <button id="submitComment" class="absolute right-0 mr-3 bg-light-mode-accent rounded-input-box p-2">
            <img src="/lightmode/up_arrow_icon.svg" class="h-5 w-5"/>
          </button>
          <input id="commentInput" class="w-full h-47 p-3 rounded-input-box border-2" placeholder="enter a comment">
        </div>
      </div>
    </div>
  </div>`;

  const albumCommentSection = document.querySelector(".albumComments");
  let commentId = null;
  albumCommentSection.addEventListener("click", async function (event) {
    event.preventDefault();
    commentUser = event.target.closest("div.comment").getAttribute("user");
    switch (event.target.tagName) {
      case "A":
        if (event.target.className.includes("replyButton") && commentUser !== "null") {
          const comment = document.querySelector("#comment");
          comment.classList.remove("bg-transparent");
          comment.classList.add("border-2", "bg-light-mode-accent");
          commentId = event.target.closest("div.comment").id;
          const commentInput = document.querySelector("#commentInput");
          if (commentInput) {
            commentInput.id = "replyInput";
            commentInput.placeholder = "enter a reply";
          }

          const replyContent = document.querySelector("#replyContent");
          replyContent.innerHTML = `
          <div class="flex justify-between items-center p-3">
            <p class="text-white ml-1">Replying to @${commentUser}</p>
            <button id="closeReply" class="h-4 w-4 mr-2">
              <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 5L19 19M5 19L19 5" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g>
              </svg>
            </button>
          </div>`;

          comment.querySelector("#closeReply").addEventListener("click", () => {
            comment.classList.add("bg-transparent");
            comment.classList.remove("border-2", "bg-light-mode-accent");

            const replyInput = document.querySelector("#replyInput");
            replyInput.id = "commentInput";
            replyInput.placeholder = "enter a comment";
            replyContent.innerHTML = "";
          });
        }
        break;
      case "IMG":
        if (event.target.className.includes("moreOptions")) {
          commentId = event.target.closest("div.comment").id;
          const helperObj = { currentUserProfilePicture, albumId, commentId }
          await displayConfirmationPopup("delete comment", helperObj);
        }
      default:
        break;
    }

    const like = event.target.closest(".like");
    if (like) {
      if (like.classList.contains("liked")) {
        commentId = event.target.closest("div.comment").id;
        like.classList.remove("liked");
        like.querySelector("svg path").setAttribute("fill", "none");
        like.querySelector("svg path").setAttribute("stroke", "#000000");
        await likeComment(commentId);
        await displayComments(albumId, currentUserProfilePicture, currentLocalUser);
      } else if (commentUser !== "null") {
        like.classList.add("liked");
        commentId = event.target.closest("div.comment").id;
        like.querySelector("svg path").setAttribute("fill", "#FF4646");
        like.querySelector("svg path").setAttribute("stroke", "#FF4646");
        await likeComment(commentId);
        return await displayComments(albumId, currentUserProfilePicture, currentLocalUser);
      }
      return;
    }
  });

  const newCommentInput = document.querySelector("#commentInput");
  newCommentInput.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
      newCommentInput.id === "replyInput"
        ? await newComment(newCommentInput.value, albumId, commentId)
        : await newComment(newCommentInput.value, albumId);
      await displayComments(albumId, currentUserProfilePicture, currentLocalUser);
    }
  });
  const submitComment = document.querySelector("#submitComment");
  submitComment.addEventListener("click", async function (event) {
    event.preventDefault();
    const enterKeyEvent = new KeyboardEvent("keydown", { key: "Enter" });
    newCommentInput.dispatchEvent(enterKeyEvent);
  });
}

async function displayMap() {
  pageName.textContent = "Maps";
  leftHeaderButton.innerHTML = `<img src="/lightmode/back_button.svg" alt="Back Button" id="mapBackButton"/>`;
  pageContent.innerHTML = "";
}

async function displayPopup(activity) {
  const notificationText = document.querySelector("#notificationText");
  notificationText.textContent = `${activity}`;
  const popup = document.querySelector("#popup");
  popup.classList.remove("hidden");

  const closeButton = document.querySelector("#popupCloseButton");
  closeButton.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  setTimeout(() => {
    popup.classList.add("opacity-0", "duration-1000");
    popup.addEventListener("transitionend", async () => {
      await resetPopup();
    });
  }, 2000);

  async function resetPopup() {
    const notificationText = popup.querySelector("#notificationText");
    notificationText.textContent = "";
    popup.classList.remove("opacity-0", "duration-1000");
    popup.classList.add("hidden");
  }
}

async function displayConfirmationPopup(activity, helperObj) {
  const confirmationText = document.querySelector("#confirmationText");
  confirmationText.textContent = `${activity}`;
  const confirmationPopup = document.querySelector("#confirmationPopup");
  confirmationPopup.classList.remove("hidden");
  confirmationPopup;

  const confirmEventHandler = async (event) => {
    event.stopImmediatePropagation();
    const cancelButton = event.target.closest("#cancelButton");
    const contextButton = event.target.closest("#contextButton");
    if (cancelButton) {
      confirmationPopup.removeEventListener("click", confirmEventHandler, true)
      confirmationPopup.classList.add("hidden");
    }

    if (contextButton) {
      if (activity === "delete comment") {
        await deleteComment(helperObj.commentId);
        confirmationPopup.classList.add("hidden");
        confirmationText.textContent = "";
        confirmationPopup.removeEventListener("click", confirmEventHandler, true)
        await displayComments(
          helperObj.albumId,
          helperObj.currentUserProfilePicture,
          currentLocalUser
        );
      }
    }
  }

  confirmationPopup.addEventListener("click", confirmEventHandler, true);
  
}
