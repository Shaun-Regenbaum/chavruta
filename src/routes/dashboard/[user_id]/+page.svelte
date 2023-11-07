<nav class="navbar">
    <a>Chavruta</a>
    <a>Logout</a>
</nav>

<div class="main-container">
    <div class="chavruta-container">
        <h3>Chavruta #1</h3>
        <p class="time-p">8:30 am daily</p>
        <p class="mishna-p">Mishna Peah</p>
        <button class="calander-button">Add to Calandar</button>
        <button class="enter-button">Enter</button>
    </div>
    <div class="chavruta-container">
        <h3>Chavruta #2</h3>
        <p class="time-p">8:30 am daily</p>
        <p class="mishna-p">Mishna Peah</p>
        <button class="calander-button">Add to Calandar</button>
        <button class="enter-button">Enter</button>
    </div>
    <div class="chavruta-container">
        <h3>Chavruta #3</h3>
        <p class="time-p">8:30 am daily</p>
        <p class="mishna-p">Mishna Peah</p>
        <button class="calander-button">Add to Calandar</button>
        <button class="enter-button">Enter</button>
    </div>

    <button class="new-button">+ New</button>
</div>

<style>
    /* Style for the main container */
.main-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 100px;
    margin-right: 100px;
}

/* Style for each chavruta container */
.chavruta-container {
    padding: 20px;
    display: grid;
    grid-template-rows:25% 25% 25% ;
    grid-template-columns: 1fr 30%;
    border-bottom: 1px solid #808080; /* Add a horizontal border between containers */
    padding: 20px;

}

.chavruta-container h3 {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
}
.mishna-p {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
}

.time-p {
    grid-row: 2/3;
    grid-column: 1 / 2;
}

.chavruta-container button {
    margin: 5px;
    border: none;
    background-color: #0077cc; /* Button background color */
    color: #fff; /* Button text color */
    border-radius: 5px; /* Add rounded corners if desired */
    cursor: pointer;
    
}

.calander-button {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
}

.enter-button {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
}

.new-button {
    position: fixed;
    bottom: 40px; /* Adjust the distance from the bottom */
    right: 100px; /* Adjust the distance from the right */
    padding: 10px 20px;
    background-color: #0077cc;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

/* Styles for the navigation bar */
.navbar {
    background-color: #333;
    display: flex; /* Use flexbox to center items horizontally and vertically */
    justify-content:space-between; /* Center items horizontally */
    align-items: center; /* Center items vertically */
    overflow: hidden;
}

/* Style for the navigation links */
.navbar a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

</style>