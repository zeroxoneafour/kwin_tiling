// tile as many windows as possible in the current virtual desktop

// start by getting root tile
let root_tile = workspace.tilingForScreen(workspace.activeScreen).rootTile;

// get clients of current virtual desktop
let clients = [];
for (client of workspace.clientList()) {
    if (client.isOnCurrentDesktop) {
        clients.append(client);
    }
}

print(clients);

// iterate over the child tiles of the root tile
for (tile in root_tile.tiles) {
    if (clients.length < tile) {
        break;
    }
    root_tile.tiles[tile].addWindow;
}
