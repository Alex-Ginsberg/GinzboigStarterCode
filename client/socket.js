/*
  Use this file to set up socket listeners
  i.e:
    socket.on('new-song', song => {
      store.dispatch(newSong(song))
    })
*/

import io from 'socket.io-client'

const socket = io(window.location.origin)

export default socket
