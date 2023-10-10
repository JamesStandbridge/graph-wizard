package com.graph_wizard.server.config.serialization;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.graph_wizard.server.model.Edge;

import java.io.IOException;

public class EdgeDeserializer extends JsonDeserializer<Edge> {

    @Override
    public Edge deserialize(JsonParser jsonParser, DeserializationContext context) throws IOException, JsonProcessingException {
        // Parse the whole tree once
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);

        // Assuming all fields are mandatory. If any field might be absent, use has() before getting it.
        String source = node.get("source").asText();
        String target = node.get("target").asText();
        Integer weight = node.get("weight").asInt();
        Boolean oriented = node.get("oriented").asBoolean();

        // Return a concrete instance of Edge
        return new Edge(source, target, weight, oriented);
    }
}