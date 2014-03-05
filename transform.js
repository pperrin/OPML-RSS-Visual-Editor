  			var draggingId;
			
					/* keep open while over */
					function allowDrop(ev) { ev.preventDefault(); }

					/* prep for drag */
					function drag(ev) {
						ev.dataTransfer.setData("Text",ev.target.id);
						draggingId = ev.target.id;
						ev.target.classList.add("tilt");
					}

					/* tidy up as dropped */
					// Skip default action
					// Close drop zone
					// Find parent to have node inserted
					function drop(ev) {
	 				ev.preventDefault();
						var dropOn=ev.target;
						dropOn.classList.remove("dodge");
						if (dropOn.classList.contains("drop")) {
	 					var data =ev.dataTransfer.getData("Text");
	 					document.getElementById(data).classList.remove("tilt");
	 					 dropOn.appendChild( document.getElementById(data));
						return; }			
						while (dropOn.parentNode!=null && !dropOn.parentNode.classList.contains("drop"))
 				 					{ dropOn = dropOn.parentNode }
						
						if (dropOn == null) {return; }
	 					// Move it in DOM
	 					var data =ev.dataTransfer.getData("Text");
						document.getElementById(data).classList.remove("tilt");
						if (dropOn.nextSibling!=null)
						{ dropOn.parentNode.insertBefore(document.getElementById(data),dropOn.nextSibling);}
						else 
						{ dropOn.parentNode.appendChild( document.getElementById(data)) }
					}
					
					function dragEnd(event) { document.getElementById(data).classList.remove("tilt"); }	

					/* Make space for drop (and tidy up) */
					function dodgeDrop(ev) {
					 console.log("dropddge ");
dodgeIt(ev.target);}
					function dodgeIt(target) {
			 		if (target.id==draggingId) {return; }
					 target.classList.toggle("dodge");
 			 }
