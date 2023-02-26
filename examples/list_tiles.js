// list tiles in tiling layout of current screen

// the tile manager that enables all of the tiling features
let tilemanager = workspace.tilingForScreen(workspace.activeScreen);

// the root tile of the tiling manager, off of which all other tiles in the current tiling config build off of
let root_tile = tilemanager.rootTile;

// should print the screen size
print(root_tile.absoluteGeometry);

// iterate over the child tiles of the root tile
for (tile of root_tile.tiles) {
    // prints the geometry (offset_x, offset_y, length, height) of the child tile
    print(tile.absoluteGeometry);
}
