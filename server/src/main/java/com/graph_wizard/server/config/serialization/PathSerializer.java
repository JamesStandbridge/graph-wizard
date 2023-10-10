    package com.graph_wizard.server.config.serialization;

    import com.fasterxml.jackson.core.JsonGenerator;
    import com.fasterxml.jackson.databind.JsonSerializer;
    import com.fasterxml.jackson.databind.SerializerProvider;
    import com.graph_wizard.server.model.Path;
    import com.graph_wizard.server.model.Node;
    import java.io.IOException;

    public class PathSerializer extends JsonSerializer<Path> {

        @Override
        public void serialize(Path path, JsonGenerator jsonGen, SerializerProvider serializers) throws IOException {
            jsonGen.writeStartObject();
            
            jsonGen.writeArrayFieldStart("nodes");
            for (Node node : path.getNodes()) {
                jsonGen.writeStartObject();
                jsonGen.writeStringField("id", node.getName());
                jsonGen.writeEndObject();
            }
            jsonGen.writeEndArray();

            jsonGen.writeNumberField("totalCost", path.getTotalWeight());

            jsonGen.writeEndObject();
        }
    }
