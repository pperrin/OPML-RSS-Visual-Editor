<?xml
version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" href="transform.css" />
				<script src="transform.js">//</script>
					</head>
						
					<body>
				
					 <div class="drop" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)" >	
						<xsl:apply-templates />
					</div>
					</body>
				</html>
			</xsl:template>
						
			<xsl:template match="head">
			<div style="width:95%"><xsl:value-of select="title" /></div>
			</xsl:template>
			
			<xsl:template match="outline">
				<div id="{generate-id()}" class="drag drop" draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)" ondragstart="drag(event)" >
				<div ondragenter="dodgeDrop(event)" ondragleave="dodgeDrop(event)" >	<xsl:value-of select="@text"/> </div>
					<xsl:apply-templates />
				</div>
			</xsl:template>
						
			<xsl:template match="outline[@type='rss']">
				<div id="{generate-id()}" class="feed drag" draggable="true" ondragenter="dodgeDrop(event)" ondragleave="dodgeDrop(event)" >
					<xsl:value-of select="@type"/>
					<br />
					<xsl:value-of select="@text"/>
					<br />
					<xsl:value-of select="@title"/>
					<br />
					<xsl:value-of select="@xmlUrl"/>
					<br />
					<xsl:value-of select="@htmlUrl"/>
					<br />
					<xsl:apply-templates />
				</div>
			</xsl:template>
						
						
		</xsl:stylesheet>