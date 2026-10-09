console.log("JS loaded");


const videos = [
    {
        title: "Trying to make a Smart Button...",
        url: "https://youtu.be/ia1x1VsBU6M"
    },
    {
        title: "Gamifying my Sleep with a Bot...",
        url: "https://youtu.be/AUiJOF9ovxU"
    },
    {
        title: "…from Cheap Tech to a FIRE Hazard",
        url: "https://youtu.be/mPVvCzP2bec"
    }

];


const grid = document.getElementById("video-grid");
const emptyMessage = document.getElementById("empty-message");

function createVideoCard(video) {
    const id = new URL(video.url).pathname.slice(1);

    const card = document.createElement("a");
    card.className = "video-card";
    card.href = video.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.setAttribute("aria-label", `Watch ${video.title} on YouTube`);

    const thumbnail = document.createElement("img");
    thumbnail.className = "video-thumbnail";
    thumbnail.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    thumbnail.alt = "";
    thumbnail.loading = "lazy";

    const title = document.createElement("h2");
    title.className = "video-title";
    title.textContent = video.title;

    const wrapper = document.createElement("div");
    wrapper.className = "thumbnail-wrapper";
    wrapper.appendChild(thumbnail);

    card.append(wrapper, title);

    return card;
}

const fragment = document.createDocumentFragment();

videos.forEach(video => fragment.appendChild(createVideoCard(video)));

grid.replaceChildren(fragment);
emptyMessage.hidden = grid.children.length > 0;