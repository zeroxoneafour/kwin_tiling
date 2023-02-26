// tile as many windows as possible in the current virtual desktop

// start by getting root tile
let root_tile = workspace.tilingForScreen(workspace.activeScreen).rootTile;

// get clients of current virtual desktop
let clients = [];
let desktop = workspace.currentDesktop;
for (client of workspace.clientList()) {
    if (client.desktop == desktop) {
        clients.push(client);
    }
}

print(clients);

// iterate over the child tiles of the root tile
for (tile in root_tile.tiles) {
    print(tile)
    if (clients.length < tile) {
        break;
    }
    print(clients[tile]);
    root_tile.tiles[tile].windows.push(clients[tile]);
    print(root_tile.tiles[tile].windows)
}
